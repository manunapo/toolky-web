/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    let bucket = process.env.BUCKET
    console.log("bucket: " + bucket);
    let gcpKey = process.env.GCP_WEB_RISK_KEY
    console.log("gcpKey: " + gcpKey);
    let destFile = process.env.GOOGLE_APPLICATION_CREDENTIALS
    console.log("destFile: " + destFile);

    let url = event?.arguments?.url || event.url;

    // First check if the creds already exist locally
    const Fs = require('fs');
    let credsExist = Fs.existsSync(destFile);

    console.log("GCP secrets  exist?: " + credsExist);

    // If creds does not exist, lest retrieve it from S3
    if (!credsExist) {

        try {
            const AWS = require('aws-sdk');
            const S3 = new AWS.S3();
            const fsPromise = require('fs').promises;



            const params = {
                Bucket: bucket,
                Key: gcpKey,
            };

            credentials = await S3.getObject(params).promise();
            await fsPromise.writeFile(destFile, credentials.Body);
            console.log("credentials: " + credentials);
            console.log("GCP secrets loaded");
            credsExist = true;
        } catch (err) {
            console.log("Error retrieving GCP credentials: " + err);
        }
    }

    let statusCode = 500;
    let body = {};

    // Once we have the creds we can do the call to GCP Web Risk API
    if (credsExist) {

        const { WebRiskServiceClient, protos } = require('@google-cloud/web-risk');
        const client = new WebRiskServiceClient()

        if (url !== "") {

            // Create an API request to check for malware, social engineering,
            // and unwanted software.
            const request = {
                uri: url,
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
                    body = threat;
                } else {
                    statusCode = 200;
                    body = { "msg": "No threats found" };
                    console.info('No threats found');
                }
            } catch (e) {
                console.log("Exception: " + e);
                body = { "err_msg": e };
            }
        }
    } else {
        body = { "err_msg": "There was an error retrieving the S3 GCP credentials file" }
    }

    // Finally we return
    return {
        statusCode: statusCode,
        body: JSON.stringify(body),
    };
};