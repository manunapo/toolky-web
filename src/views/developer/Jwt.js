import { useState, useEffect } from "react";
import { Buffer } from "buffer";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input,
  CardGroup,
  CardFooter,
} from "reactstrap";

const Jwt = (props) => {
  const initialJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  const initialHeader = {
    "alg": "HS256",
    "typ": "JWT"
  };
  const initialPayload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  };

  const [encodedJwtTextArea, setEncodedJwtTextArea] = useState(initialJwt);
  const [styleInputError, setStyleInputError] = useState('no-error');
  const [decodedHeaderJwtTextArea, setDecodedHeaderJwtTextArea] = useState(JSON.stringify(initialHeader, null, 4));
  const [decodedPayloadJwtTextArea, setDecodedPayloadJwtTextArea] = useState(JSON.stringify(initialPayload, null, 4));

  useEffect(() => {
    props.sendPageView(props.location.pathname);
  });

  function handleJwtDecoding(event) {
    const dataToDec = event.target.value;
    setEncodedJwtTextArea(dataToDec);

    /* let encHeader, encPayload, encSignature = ""; */
    let encHeader, encPayload = "";

    if (dataToDec !== "") {
      setEncodedJwtTextArea();
      setDecodedHeaderJwtTextArea("");
      setDecodedPayloadJwtTextArea("");

      let parts = dataToDec.split(".");
      if (parts.length < 3) {
        setDecodedHeaderJwtTextArea(JSON.stringify(JSON.parse('{}'), null, 4));
        setDecodedPayloadJwtTextArea(JSON.stringify(JSON.parse('{}'), null, 4));
        setStyleInputError('error');
      } else {
        encHeader = parts[0];
        encPayload = parts.slice(1, -1).join('');
        /* encSignature = parts[parts.length - 1]; */
        try {
          let decodedHeader = Buffer.from(encHeader, 'base64').toString('utf-8');
          setDecodedHeaderJwtTextArea(JSON.stringify(JSON.parse(decodedHeader), null, 4));
        } catch (err) {
          setDecodedHeaderJwtTextArea(JSON.stringify(JSON.parse('{}'), null, 4));
        }
        try {
          let decodedPayload = Buffer.from(encPayload, 'base64').toString('utf-8');
          setDecodedPayloadJwtTextArea(JSON.stringify(JSON.parse(decodedPayload), null, 4));
        } catch (err) {
          setDecodedPayloadJwtTextArea(JSON.stringify(JSON.parse('{}'), null, 4));
        }
        setStyleInputError('no-error');
      }

    } else {
      setDecodedHeaderJwtTextArea(JSON.stringify(JSON.parse('{}'), null, 4));
      setDecodedPayloadJwtTextArea(JSON.stringify(JSON.parse('{}'), null, 4));
      setStyleInputError('error');
    }
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <CardGroup>
              <Card>
                <CardHeader>
                  <h5 className="card-category">JWT</h5>
                  <CardTitle tag="h2">Encoded</CardTitle>
                </CardHeader>
                <CardBody>
                  <label>Simply paste the JWT.</label>
                  <Input
                    type="textarea"
                    className={"resizable pl-2 " + styleInputError}
                    value={encodedJwtTextArea}
                    onChange={handleJwtDecoding}
                  />
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="card-category">JWT</h5>
                  <CardTitle tag="h2">Decoded</CardTitle>
                </CardHeader>
                <CardBody>
                  <label>Header:</label>
                  <pre className="pl-2 pt-2">
                    {decodedHeaderJwtTextArea}
                  </pre>
                  <label className="mt-4">Payload:</label>
                  <pre className="pl-2 pt-2">
                    {decodedPayloadJwtTextArea}
                  </pre>
                </CardBody>
                <CardFooter />
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">JSON Web Tokens &#128125;</h3>
        <CardBody>
          <Row>
            <Col sx="6">
              <h3 className="mt-5">What is a JWT?</h3>
              <p>
                JWT is an open, industry-standard (RFC 7519) for representing claims securely between two parties.
              </p>
              <br />
              <p>
                In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:
              </p>
              <br />
              <p className="blockquote">
                Header
                <br />
                Payload
                <br />
                Signature
              </p>
              <p>
                Therefore, a JWT typically looks like the following.
              </p>
              <br />
              <p className="blockquote">
                xxxxx.yyyyy.zzzzz
              </p>
            </Col>
            <Col sx="3">
              <h3 className="mt-5">Header</h3>
              <p>
                The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
                <br />
                <br />
                Then, this JSON is Base64Url encoded to form the first part of the JWT.
              </p>
            </Col>
            <Col sx="3">
              <h3 className="mt-5">Payload</h3>
              <p>
                The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sx="4">
              <h3 className="mt-5">Registered Claim Names</h3>
              <p>
                The JWT specification defines some registered claim names and defines how they should be used. We support these registered claim names:
              </p>
              <br />
              <p className="blockquote">
                “exp” (Expiration Time) Claim
                <br />
                “nbf” (Not Before Time) Claim
                <br />
                “iss” (Issuer) Claim
                <br />
                “aud” (Audience) Claim
                <br />
                “iat” (Issued At) Claim
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-5">Expiration Time Claim (exp)</h3>
              <p>
                The “exp” (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. The processing of the “exp” claim requires that the current date/time MUST be before the expiration date/time listed in the “exp” claim. Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew. Its value MUST be a number containing a NumericDate value. Use of this claim is OPTIONAL.
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-5">Not Before Time Claim (nbf)</h3>
              <p>
                The “nbf” (not before) claim identifies the time before which the JWT MUST NOT be accepted for processing. The processing of the “nbf” claim requires that the current date/time MUST be after or equal to the not-before date/time listed in the “nbf” claim. Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew. Its value MUST be a number containing a NumericDate value. Use of this claim is OPTIONAL.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sx="6">
              <h3 className="mt-5">Issuer Claim (iss)</h3>
              <p>
                The “iss” (issuer) claim identifies the principal that issued the JWT. The processing of this claim is generally application specific. The “iss” value is a case-sensitive string containing a StringOrURI value. Use of this claim is OPTIONAL.
              </p>
            </Col>
            <Col sx="6">
              <h3 className="mt-5">Audience Claim (aud)</h3>
              <p>
                The “aud” (audience) claim identifies the recipients that the JWT is intended for. Each principal intended to process the JWT MUST identify itself with a value in the audience claim. If the principal processing the claim does not identify itself with a value in the “aud” claim when this claim is present, then the JWT MUST be rejected.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default Jwt;
