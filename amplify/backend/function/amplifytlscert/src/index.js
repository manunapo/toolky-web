const https = require('https');
const validator = require('validator');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`Input Event: ${JSON.stringify(event)}`);

    let url = event?.arguments?.url || event.url;

    let certificate = undefined;

    let statusCode = 500;
    let body = {};

    try {
        certificate = await getSSLCertificateInfo(url);

        console.log(JSON.stringify(certificate));

        statusCode = 200
        body = certificate;

    } catch (e) {
        console.log("Exception: " + e);
        body = { "err_msg": "" + e };
    }

    return {
        statusCode: statusCode,
        body: JSON.stringify(body),
    };
};

const getSSLCertificateInfo = host => {
    if (!validator.isFQDN(host)) {
        return Promise.reject(new Error('Invalid host.'));
    }
    const options = {
        agent: false,
        method: 'HEAD',
        port: 443,
        rejectUnauthorized: false,
        hostname: host,
        timeout: 7000
    };
    return new Promise((resolve, reject) => {
        try {
            const req = https.request(options, res => {
                const crt = res.socket.getPeerCertificate()
                resolve({
                    certificate: crt
                });
            });
            req.on('timeout', () => {
                console.log("time");
                req.destroy();
            });
            req.on('error', reject);
            req.end();
        } catch (e) {
            console.log(e)
            reject(e);
        }
    });
};