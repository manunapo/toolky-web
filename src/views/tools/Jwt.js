import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  CardGroup,
} from "reactstrap";

import { callAPI } from "calls/AxiosWrapper.js";

const Jwt = (props) => {
  const [encodedJwtTextArea, setEncodedJwtTextArea] = React.useState("");
  const [decodedHeaderJwtTextArea, setDecodedHeaderJwtTextArea] = React.useState("");
  const [decodedPayloadJwtTextArea, setDecodedPayloadJwtTextArea] = React.useState("");

  function thenHook(response) {
    try {
      setDecodedHeaderJwtTextArea(JSON.stringify(JSON.parse(response.data.header), null, 4))
    } catch (e) {
      setDecodedHeaderJwtTextArea(response.data.header)
      props.handleNotification("JWT Header may be incorrect", "warning");
    }
    try {
      setDecodedPayloadJwtTextArea(JSON.stringify(JSON.parse(response.data.payload), null, 4))
    } catch (e) {
      setDecodedPayloadJwtTextArea(response.data.payload)
      props.handleNotification("JWT Payload is encrypted", "warning");
    }
    if (response.data.error === "jwt" || response.data.error === "header") {
      props.handleNotification(response.data.msg, "danger");
    } else if (response.data.error === "payload") {
      props.handleNotification(response.data.msg, "warning");
    } else {
      props.handleNotification(response.data.msg, "success");
    }
  }

  function errorHook(error) {
    props.handleNotification("Check your JWT and try again!");
  }

  function handleJwtDecoding(event) {
    if (event.target.value !== "") {
      setEncodedJwtTextArea();
      setDecodedHeaderJwtTextArea("")
      setDecodedPayloadJwtTextArea("")
      const data = { value: event.target.value }
      callAPI("/jwt/dec", "POST", data, thenHook, errorHook)
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
                  <h5 className="card-category">JWT to</h5>
                  <CardTitle tag="h2">Decode</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="#">
                    <label>Simply paste the JWT.</label>
                    <FormGroup>
                      <Input
                        type="textarea"
                        className="min-height"
                        value={encodedJwtTextArea}
                        onChange={handleJwtDecoding}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="card-category">Decoded</h5>
                  <CardTitle tag="h2">JWT</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="#">
                    <label>Header:</label>
                    <FormGroup>
                      <Input
                        type="textarea"
                        className="min-height"
                        value={decodedHeaderJwtTextArea}
                        onChange={() => function doNothing() { }} // To avoid dom warning, readOnly would change the style.
                      />
                      <label className="mt-4">Payload:</label>
                      <Input
                        type="textarea"
                        className="min-height"
                        value={decodedPayloadJwtTextArea}
                        onChange={() => function doNothing() { }} // To avoid dom warning, readOnly would change the style.
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">JSON Web Tokens</h3>
        <CardBody>
          <Row>
            <Col sx="6">
              <h3 className="mt-5">What is a JWT?</h3>
              <p>
                JWT is an open, industry-standard (RFC 7519) for representing claims securely between two parties.
                <br />
                In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:
                <br />
                <br />
                Header
                <br />
                Payload
                <br />
                Signature
                <br />
                <br />
                Therefore, a JWT typically looks like the following.
                <br />
                <br />
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
                <br />
                <br />
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
