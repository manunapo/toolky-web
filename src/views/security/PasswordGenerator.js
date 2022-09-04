import React from "react";
import Nouislider from "nouislider-react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Badge,
  Input,
  Label,
  FormGroup,
  CustomInput,
} from "reactstrap";

const PasswordGenerator = () => {
  const [isPasswordType, togglePasswordType] = React.useState(true);
  const [includeUpperCases, toggleIncludeUpperCases] = React.useState(true);
  const [includeLowerCases, toggleIncludeLowerCases] = React.useState(true);
  const [includeNumbers, toggleIncludeNumbers] = React.useState(true);
  const [includeSpecialChars, toggleIncludeSpecialChars] = React.useState(true);
  const [secretLength, setSecretLength] = React.useState(8);
  const [generatedSecret, setGeneratedSecret] = React.useState();



  React.useEffect(() => {

    if (isPasswordType) {


    } else {
      // is passphrase
    }

    console.log(secretLength);
    console.log(Words[Math.floor(Math.random() * 58001)]);
  }, [isPasswordType, includeUpperCases, includeLowerCases, includeNumbers, includeSpecialChars, secretLength]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="card-category">Secrets</h5>
                <CardTitle tag="h2">Generator</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="text-left">Secret Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <span className="mr-2">Password</span>
                          </td>
                          <td className="text-center">
                            <CustomInput
                              type="switch"
                              id="switch-5"
                              className="mt-n4"
                              onChange={() => { togglePasswordType(!isPasswordType) }}
                            />
                          </td>
                          <td className="text-right">
                            <span className="ml-n2">Passphrase</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-4" md="6">
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="text-left">Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">A-Z</td>
                          <td className="text-right">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={includeUpperCases}
                                  onChange={() => { toggleIncludeUpperCases(!includeUpperCases) }}
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">a-z</td>
                          <td className="text-right">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={includeLowerCases}
                                  onChange={() => { toggleIncludeLowerCases(!includeLowerCases) }}
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">0-9</td>
                          <td className="text-right">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={includeNumbers}
                                  onChange={() => { toggleIncludeNumbers(!includeNumbers) }}
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">{specialChars}</td>
                          <td className="text-right">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={includeSpecialChars}
                                  onChange={() => { toggleIncludeSpecialChars(!includeSpecialChars) }}
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="6">
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="text-left">Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <div className="slider">
                              <Nouislider
                                range={{ min: 4, max: 128 }}
                                start={8}
                                step={1}
                                onSlide={(e) => { setSecretLength(Math.floor(e)) }}
                              />
                            </div>
                          </td>
                          <td className="text-right">
                            <Badge color="primary">0
                            </Badge>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xs="9">
                    <div className="text-center">
                      asd
                      {generatedSecret}
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="text-right">
                      STRONG
                    </div>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">Passwords</h3>
        <CardBody>
          <Row>
            <Col sx="6">
              <h3 className="mt-2">What is Base64?</h3>
              <p>
                Base64 is designed to carry data stored in binary formats across channels that only reliably support text content.
                Base64 is particularly prevalent on the World Wide Web where one of its uses is the ability to embed image files or other binary assets inside textual assets such as HTML and CSS files.
              </p>
            </Col>
            <Col sx="6">
              <h3 className="mt-2">Why use Base64 Encoder/Decoder?</h3>
              <p>
                The Base64 Decoder Encoder is generally used when there is a need to encode or decode binary information.
                The result data will further need to be stored and transferred over the media that is created to deal with the textual information.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sx="6">
              <h3 className="mt-2">Base64 Encode</h3>
              <p>
                This function helps you to easily encode any string or query within a fraction of seconds.
                If you encode Base64 the text "Many hands make light work.", its output result will be:
              </p>
              <br />
              <br />
              <p className="blockquote">
                “TWFueSBoYW5kcyBtYWtlIGxpZ2h0IHdvcmsu”
              </p>
            </Col>
            <Col sx="6">
              <h3 className="mt-2">Base64 Decode</h3>
              <p>
                This function helps you to easily decode any base 64 string.
                If you decode Base64 the enconded “TWFueSBoYW5kcyBtYWtlIGxpZ2h0IHdvcmsu”, its output result will be:
              </p>
              <br />
              <br />
              <p className="blockquote">
                “Many hands make light work.”
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default PasswordGenerator;
