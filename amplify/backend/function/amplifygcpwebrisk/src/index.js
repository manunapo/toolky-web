/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);


    const AWS = require('aws-sdk');
    const S3 = new AWS.S3();
    const fsPromise = require('fs').promises;

    let bucket = process.env.BUCKET
    console.log("bucket: " + bucket);
    let gcpKey = process.env.GCP_WEB_RISK_KEY
    console.log("gcpKey: " + gcpKey);
    let destFile = process.env.GOOGLE_APPLICATION_CREDENTIALS
    console.log("destFile: " + destFile);

    var credentials = ""
    try {
        const params = {
            Bucket: bucket,
            Key: gcpKey,
        };

        credentials = await S3.getObject(params).promise();
        await fsPromise.writeFile(destFile, credentials.Body);
        console.log("credentials: " + credentials);
        console.log("GCP secrets loaded");

    } catch (err) {
        console.log("Error retrieving GCP credentials: " + err);
    }

    let statusCode = 500;
    let body = "";

    if (credentials !== "") {

        const { WebRiskServiceClient, protos } = require('@google-cloud/web-risk');
        const client = new WebRiskServiceClient()

        if (event.url !== "") {

            // Create an API request to check for malware, social engineering,
            // and unwanted software.
            const request = {
                uri: event.url,
                threatTypes: [
                    protos.google.cloud.webrisk.v1.ThreatType.MALWARE,
                    protos.google.cloud.webrisk.v1.ThreatType.SOCIAL_ENGINEERING,
                    protos.google.cloud.webrisk.v1.ThreatType.UNWANTED_SOFTWARE,
                ],
            };

            try {
                // call the WebRisk searchUris API.
                const { threat } = (await client.searchUris(request))[0];
                if (threat) {
                    statusCode = 200;
                    body = JSON.stringify(threat);
                } else {
                    statusCode = 200;
                    body = "No threats found";
                    console.info('No threats found');
                }
            } catch (e) {
                console.log("Exception: " + e);
                body = JSON.stringify(e);
            }
        }
    } else {
        body = "There was an error retrieving the S3 GCP credentials file"
    }

    return {
        statusCode: statusCode,
        body: body,
    };
};