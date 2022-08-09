import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Collapse,
  FormGroup,
  Form,
  Input,
  CardFooter,
  Button,
} from "reactstrap";

import Select from "react-select";

const Jwt = (props) => {
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(true);
  const [encodeCharset, setEncodeCharset] = React.useState({ value: "1", label: "ascii" });
  const [encodedJwtTextArea, setEncodedJwtTextArea] = React.useState("");
  const [decodedJwtTextArea, setDecodedJwtTextArea] = React.useState("");
  const [singleSelect, setsingleSelect] = React.useState(null);

  function handleJwtDecoding(event) {
    /*  if (encodeTextArea !== "") {
       const data = { value: encodeTextArea, charset: encodeCharset.label }
       callBase64API("enc", data);
     } else {
       props.handleNotification("You need to enter some text!");
     } */
    if (event.target.value !== "") {
      setEncodedJwtTextArea();
      const data = { value: event.target.value }
      callJwtAPI(data);
    }
  }

  function callJwtAPI(data = { value: "" }) {
    const url = "http://127.0.0.1:8000/jwt/dec";
    const options = {
      method: 'POST',
      headers: {
        "X-API-Key": "123asd456",
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      data: JSON.stringify(data),
      url
    };
    axios(options)
      .then(function (response) {
        if (response.data.value !== "") {
          props.handleNotification("Decoded!", "success");
          setDecodedJwtTextArea(JSON.stringify(response.data.value, null, 4))
        } else {
          props.handleNotification("Error: " + response.data.error_msg, "danger");
        }
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        props.handleNotification("Check your JWT and try again!");
      })
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col sm="6">
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
              <CardFooter>
                <Row>
                  <Col sm="6">
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      name="singleSelect"
                      value={singleSelect}
                      onChange={(value) => setsingleSelect(value)}
                      options={[
                        {
                          value: "",
                          label: "Single Option",
                          isDisabled: true,
                        },
                        { value: "2", label: "Foobar" },
                        { value: "3", label: "Is great" },
                      ]}
                      placeholder="Single Select"
                    />
                  </Col>
                  <Col xs="6">
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5 className="card-category">Decoded</h5>
                <CardTitle tag="h2">JWT</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="#">
                  <label>Simply enter your data then push the decode button.</label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      className="min-height"
                      value={decodedJwtTextArea}
                      disabled={true}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col xs="6">
                    <label>Simply enter your data then push the decode button.</label>
                  </Col>
                  <Col xs="6">

                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col sx="12">
            <h3 className="mt-5">Decoding JSON Web Tokens</h3>
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

export default Jwt;
