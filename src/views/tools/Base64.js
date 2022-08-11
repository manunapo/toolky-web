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
  Label,
} from "reactstrap";

import { callAPI } from "calls/AxiosWrapper.js";

const Base64 = (props) => {
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(true);
  const [encodeCharset, setEncodeCharset] = React.useState({ value: "1", label: "ascii" });
  const [decodeCharset, setDecodeCharset] = React.useState({ value: "1", label: "ascii" });
  const [encodeTextArea, setEncodeTextArea] = React.useState("");
  const [decodeTextArea, setDecodeTextArea] = React.useState("");

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
                      className="min-height"
                      value={encodeTextArea}
                      onChange={handleEncodeTextChange}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs="6">
                    <FormGroup check className="form-check-radio">
                      <Row>
                        <Col className="checkbox-radios" xs="3">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="ascii"
                              id="asciiEncodeRadio"
                              name="encodeCharset"
                              type="radio"
                              disabled={true}
                            />
                            <span className="form-check-sign" />
                            ASCII
                          </Label>
                        </Col>
                        <Col className="checkbox-radios" xs="3">
                          <Label check>
                            <Input
                              defaultValue="utf-8"
                              id="utf8EncodeRadio"
                              name="encodeCharset"
                              type="radio"
                              disabled={true}
                            />
                            <span className="form-check-sign" />
                            UTF-8
                          </Label>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col xs="6">
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
                      className="min-height"
                      value={decodeTextArea}
                      onChange={handleDecodeTextChange}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs="6">
                    <FormGroup check className="form-check-radio">
                      <Row>
                        <Col className="checkbox-radios" xs="3">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="ascii"
                              id="asciiDecodeRadio"
                              name="decodeCharset"
                              type="radio"
                              disabled={true}
                            />
                            <span className="form-check-sign" />
                            ASCII
                          </Label>
                        </Col>
                        <Col className="checkbox-radios" xs="3">
                          <Label check>
                            <Input
                              defaultValue="utf-8"
                              id="utf8DecodeRadio"
                              name="decodeCharset"
                              type="radio"
                              disabled={true}
                            />
                            <span className="form-check-sign" />
                            UTF-8
                          </Label>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col xs="6">
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
          <Col sx="12">
            <h3 className="mt-5">Encoding & Decoding Base64</h3>
            <h4 className="">What is Base64?</h4>
            <p>
              Base64 is designed to carry data stored in binary formats across channels that only reliably support text content.
              Base64 is particularly prevalent on the World Wide Web where one of its uses is the ability to embed image files or other binary assets inside textual assets such as HTML and CSS files.
            </p>
            <h4 className="mt-3">Why use Base64 Encoder/Decoder?</h4>
            <p>
              The Base64 Decoder Encoder is generally used when there is a need to encode or decode binary information.
              The result data will further need to be stored and transferred over the media that is created to deal with the textual information.
              The 64-bit decoder provides an option to decode unlimited characters without any hurdle.
              It is widely used by several users because it provides the following functions:
            </p>
            <h4 className="mt-3">Base64 Encode</h4>
            <p>
              This function helps you to easily encode any string or query within a fraction of seconds.
              If you encode Base64 the text "Many hands make light work.", its output result will be:
              <br />
              <br />
              “TWFueSBoYW5kcyBtYWtlIGxpZ2h0IHdvcmsu”
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Base64;
