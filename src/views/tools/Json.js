import React from "react";
import ReactJson from 'react-json-view'

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

const Json = (props) => {
  const initialData = {
    "glossary": {
      "title": "example glossary",
      "GlossDiv": {
        "title": "S",
        "GlossList": {
          "GlossEntry": {
            "ID": "SGML",
            "GlossTerm": "Standard Generalized Markup Language",
            "Acronym": "SGML",
            "GlossDef": {
              "para": "A meta-markup language, used to create markup languages such as DocBook.",
              "GlossSeeAlso": ["GML", "XML"]
            },
            "GlossSee": "markup"
          }
        }
      }
    }
  };
  const [rawJsonTextArea, setRawJsonTextArea] = React.useState(JSON.stringify(initialData, null, 4));
  const [prettyJsonComp, setPrettyJsonComp] = React.useState(initialData);
  const [stringifyJsonTextArea, setStringifyJsonTextArea] = React.useState(stringifyJson(JSON.stringify(initialData)));

  function stringifyJson(value) {
    let obj;
    try {
      eval(`obj = ${value}`);
    } catch (ex) {
      eval(`obj = "${value}"`);
    }
    return JSON.stringify(JSON.stringify(obj))
  }

  function handleRawJsonTextArea(event) {
    setRawJsonTextArea();
    setStringifyJsonTextArea(stringifyJson(event.target.value));
    setPrettyJsonComp(JSON.parse(event.target.value))
  };

  function handleStringifyJsonTextArea(event) {
    setStringifyJsonTextArea();
    let parsed = JSON.parse(event.target.value)
    setRawJsonTextArea(parsed);
    setPrettyJsonComp(JSON.parse(parsed))
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h5 className="card-category">JSON Playground</h5>
              </CardHeader>
              <CardBody>
                <p>
                  Real time JSON visualizator.
                  <br />
                  Simply paste a json or type it manually and start seeing it stringifyed or in a tree structure.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <CardGroup>
              <Card>
                <CardHeader>
                  <h5 className="card-category">JSON</h5>
                  <CardTitle tag="h2">Raw</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="#">
                    <label>Simply paste the JSON.</label>
                    <FormGroup>
                      <Input
                        type="textarea"
                        className="min-height-250"
                        value={rawJsonTextArea}
                        onChange={handleRawJsonTextArea}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="card-category">JSON</h5>
                  <CardTitle tag="h2">Stringify</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="#">
                    <label>String:</label>
                    <FormGroup>
                      <Input
                        type="textarea"
                        className="min-height-250"
                        value={stringifyJsonTextArea}
                        onChange={handleStringifyJsonTextArea}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
          <Col xs="12">
            <Card className="mt-4">
              <CardHeader>
                <h5 className="card-category">JSON</h5>
                <CardTitle tag="h2">Pretty</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="#">
                  <label>View:</label>
                  <FormGroup>
                    <ReactJson
                      src={prettyJsonComp}
                      enableEdit={false}
                      enableClipboard={false}
                      theme={{
                        base00: "transparent",
                        base01: "rgb(148, 148, 158)",
                        base02: "rgb(148, 148, 158)",
                        base03: "rgb(148, 148, 158)",
                        base04: "rgb(255, 153, 255)",
                        base05: "rgb(148, 148, 158)",
                        base06: "rgb(148, 148, 158)",
                        base07: "rgb(148, 148, 158)",
                        base08: "rgb(148, 148, 158)",
                        base09: "rgb(128, 204, 255)",
                        base0A: "rgb(128, 204, 255)",
                        base0B: "rgb(128, 204, 255)",
                        base0C: "rgb(128, 204, 255)",
                        base0D: "rgb(128, 204, 255)",
                        base0E: "rgb(128, 204, 255)",
                        base0F: "rgb(128, 204, 255)"
                      }}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Json;
