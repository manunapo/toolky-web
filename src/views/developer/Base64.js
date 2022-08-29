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
  CardFooter,
  Button,
} from "reactstrap";

import { callAPI } from "calls/AxiosWrapper.js";

const Base64 = (props) => {
  const initialEncData = "clientId:clientSecret"
  const initialDecData = "Y2xpZW50SWQ6Y2xpZW50U2VjcmV0"
  const [encodeCharset, setEncodeCharset] = React.useState({ value: "1", label: "ascii" });
  const [decodeCharset, setDecodeCharset] = React.useState({ value: "1", label: "ascii" });
  const [encodeTextArea, setEncodeTextArea] = React.useState(initialEncData);
  const [decodeTextArea, setDecodeTextArea] = React.useState(initialDecData);

  function thenEncHook(response) {
    setDecodeTextArea(response.data.value);
    if (response.data.error) {
      props.handleNotification(response.data.msg, "danger");
    } else {
      props.handleNotification(response.data.msg, "success");
    }
  }
  function thenDecHook(response) {
    setEncodeTextArea(response.data.value);
    if (response.data.error) {
      props.handleNotification(response.data.msg, "danger");
    } else {
      props.handleNotification(response.data.msg, "success");
    }
  }

  function errorHook(error) {
    props.handleNotification("Check your input and try again!");
  }

  function handleEncoding() {
    if (encodeTextArea !== "") {
      const data = { value: encodeTextArea, charset: encodeCharset.label, error: false, msg: "" }
      callAPI("/base64/enc", "POST", data, thenEncHook, errorHook);
    } else {
      props.handleNotification("You need to enter some text!");
    }
  }

  function handleDecoding() {
    if (decodeTextArea !== "") {
      const data = { value: decodeTextArea, charset: decodeCharset.label, error: false, msg: "" }
      callAPI("/base64/dec", "POST", data, thenDecHook, errorHook);
    } else {
      props.handleNotification("You need to enter some text!");
    }
  }

  const handleEncodeTextChange = event => {
    setEncodeTextArea(event.target.value);
  };
  const handleDecodeTextChange = event => {
    setDecodeTextArea(event.target.value);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h5 className="card-category">Data to</h5>
                <CardTitle tag="h2">Encode</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="#">
                  <label>Simply enter your data then push the encode button.</label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      className="resizable"
                      value={encodeTextArea}
                      onChange={handleEncodeTextChange}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs="12">
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => handleEncoding()}
                    >
                      Encode
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h5 className="card-category">Data to</h5>
                <CardTitle tag="h2">Decode</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="#">
                  <label>Simply enter your data then push the decode button.</label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      className="resizable"
                      value={decodeTextArea}
                      onChange={handleDecodeTextChange}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs="12">
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => handleDecoding()}
                    >
                      Decode
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">Encoding & Decoding Base64</h3>
        <CardBody>
          <Row>
            <Col sx="4">
              <h3 className="mt-2">What is Base64?</h3>
              <p>
                Base64 is designed to carry data stored in binary formats across channels that only reliably support text content.
                Base64 is particularly prevalent on the World Wide Web where one of its uses is the ability to embed image files or other binary assets inside textual assets such as HTML and CSS files.
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-2">Why use Base64 Encoder/Decoder?</h3>
              <p>
                The Base64 Decoder Encoder is generally used when there is a need to encode or decode binary information.
                The result data will further need to be stored and transferred over the media that is created to deal with the textual information.
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-2">Base64 Encode</h3>
              <p>
                This function helps you to easily encode any string or query within a fraction of seconds.
                If you encode Base64 the text "Many hands make light work.", its output result will be:
                <br />
                <br />
                <p className="blockquote">
                  “TWFueSBoYW5kcyBtYWtlIGxpZ2h0IHdvcmsu”
                </p>
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default Base64;
