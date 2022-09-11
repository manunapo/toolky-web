

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const { WebRiskServiceClient, protos } = require('@google-cloud/web-risk');
    const client = new WebRiskServiceClient();

    let statusCode = 500;
    let body = {};

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
                console.info('No threats found');
            }
        } catch (e) {
            body = JSON.stringify(e);
        }
    }

    return {
        statusCode: statusCode,
        body: body,
    };
};