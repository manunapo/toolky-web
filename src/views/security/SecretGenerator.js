import React from "react";
import Nouislider from "nouislider-react";
import PasswordStrengthBar from 'react-password-strength-bar';

import { specialChars, generatePassword, generatePassphrase } from "helpers/SecretGenerator.js";

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
  Form,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

const SecretGenerator = () => {

  const START_LENGTH_PW = 8;
  const START_LENGTH_PH = 4;


  const [isPasswordType, setPasswordType] = React.useState(true);
  const [includeLowerCases, setIncludeLowerCases] = React.useState(true);
  const [includeUpperCases, setIncludeUpperCases] = React.useState(true);
  const [includeNumbers, setIncludeNumbers] = React.useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = React.useState(false);
  const [secretLength, setSecretLength] = React.useState(8);

  const [capitalizePassphrase, setCapitalizePassphrase] = React.useState(false);
  const [passphraseSeparator, setPassphraseSeparator] = React.useState("-");

  const [generatedSecret, setGeneratedSecret] = React.useState();
  const [refreshSecret, setRefreshSecret] = React.useState(0);

  const handleRefreshSecret = function () {

  };

  const handleTypeChange = function () {
    setPasswordType(!isPasswordType);
    if (isPasswordType) {
      setSecretLength(START_LENGTH_PH);
    } else {
      setSecretLength(START_LENGTH_PW);
    }
  };

  React.useEffect(() => {
    if (isPasswordType) {
      if (!includeLowerCases && !includeUpperCases && !includeNumbers && !includeSpecialChars) setIncludeLowerCases(!includeLowerCases);
      setGeneratedSecret(generatePassword(secretLength, includeLowerCases, includeUpperCases, includeNumbers, includeSpecialChars));
    } else {
      setGeneratedSecret(generatePassphrase(secretLength, capitalizePassphrase, passphraseSeparator));
    } handleRefreshSecret();
  }, [
    isPasswordType,
    includeUpperCases,
    includeLowerCases,
    includeNumbers,
    includeSpecialChars,
    secretLength,
    capitalizePassphrase,
    passphraseSeparator,
    refreshSecret
  ]);

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
                  <Col xs="12">
                    <Card className="border">
                      <CardBody>
                        <Row className="align-items-center">
                          <Col xs="9">
                            <div className="text-center">
                              {generatedSecret}
                            </div>
                          </Col>
                          <Col xs="3">
                            <Button
                              className="btn-link btn-icon float-right"
                              color="danger"
                              size="sm"
                              onClick={() => setRefreshSecret(refreshSecret + 1)}
                            >
                              <i className="tim-icons icon-refresh-02 float-right"
                                id="tooltip994367704"
                              />
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip994367704"
                              >
                                Refresh
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              className="btn-link btn-icon float-right"
                              color="success"
                              id="tooltip994367702"
                              size="sm"
                              onClick={() => { navigator.clipboard.writeText(generatedSecret) }}
                            >
                              <i className="tim-icons icon-single-copy-04 float-right" />
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip994367702"
                              >
                                Copy
                              </UncontrolledTooltip>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="pt-5">
                          <Col xs="12">
                            <PasswordStrengthBar password={generatedSecret} />
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
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
                              id="switch-1"
                              className="mt-n4"
                              onChange={handleTypeChange}
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
                          {isPasswordType ? (
                            <>
                              <td className="text-left">a-z</td>
                              <td className="text-right">
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      checked={includeLowerCases}
                                      onChange={() => { setIncludeLowerCases(!includeLowerCases) }}
                                    />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="text-left">Capitalize</td>
                              <td className="text-right">
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      checked={capitalizePassphrase}
                                      onChange={() => { setCapitalizePassphrase(!capitalizePassphrase) }}
                                    />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                            </>
                          )}
                        </tr>
                        {isPasswordType ? (
                          <tr>
                            <td className="text-left">A-Z</td>
                            <td className="text-right">
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={includeUpperCases}
                                    onChange={() => { setIncludeUpperCases(!includeUpperCases) }}
                                  />
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </td>
                          </tr>
                        ) : (<></>)}
                        {isPasswordType ? (
                          <tr>
                            <td className="text-left">0-9</td>
                            <td className="text-right">
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="checkbox"
                                    checked={includeNumbers}
                                    onChange={() => { setIncludeNumbers(!includeNumbers) }}
                                  />
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </td>
                          </tr>
                        ) : (<></>)}
                        <tr>
                          {isPasswordType ? (
                            <>
                              <td className="text-left">{specialChars}</td>
                              <td className="text-right">
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      checked={includeSpecialChars}
                                      onChange={() => { setIncludeSpecialChars(!includeSpecialChars) }}
                                    />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                            </>
                          ) : (<>
                            <td className="text-left">Separator</td>
                            <td className="text-right">
                              <Form action="#">
                                <FormGroup className="d-flex flex-row-reverse align-items-center mb-0">
                                  <Input
                                    type="textarea"
                                    className="separator"
                                    maxLength={1}
                                    rows="1"
                                    cols="1"
                                    value={passphraseSeparator}
                                    onChange={(e) => setPassphraseSeparator(e.target.value)}
                                  />
                                </FormGroup>
                              </Form>
                            </td>
                          </>)}
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="6">
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="text-left">{isPasswordType ? 'Length' : 'Words'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <div className="slider">
                              <Nouislider
                                range={isPasswordType ? { min: 4, max: 128 } : { min: 3, max: 20 }}
                                start={START_LENGTH_PW}
                                step={1}
                                onSlide={(e) => { setSecretLength(Math.floor(e)) }}
                              />
                            </div>
                          </td>
                          <td className="text-right">
                            <Badge color="primary">
                              {secretLength}
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

        <h3 className="title mt-5 text-center">Secrets &#128272;</h3>
        <CardBody>
          <Row>
            <Col sx="6">
              <h3 className="mt-2">Passphrase vs Password</h3>
              <p>
                The biggest factor in the consideration of passphrase vs password is simply the amount of time it takes to crack a password.
                <br />
                <br />
                Hackers employ a form of cyberattack called a “brute-force” attack, whereby an automated program repeats password combinations over and over again until the password is cracked.
                <br />
                <br />
                For methods of hacking like these, the length of the password is a greater determinant of its strength than its variety.
                <br />
                <br />
                Now compare this to a passphrase using only lowercase letters but that is 14 characters instead of seven—this would take approximately 51 years for a hacker to crack.
                <br />
                <br />
              </p>
              <p className="blockquote">
                6 mins for a password vs 51 years for a passphrase!
              </p>
            </Col>
            <Col sx="6">
              <h3 className="mt-2">What is a Passphrase?</h3>
              <p>
                A passphrase is a password composed of a sentence or combination of words.
                <br />
                <br />
                Passphrases generally tend to be longer and more complex than the average password, which increases overall security.
                <br />
                <br />
                While passphrases should be something that the user can remember, it is highly discouraged to use a common phrase. An example of a passphrase could be four random words, such as (engineer, works, harris, studying):
                <br />
                <br />
              </p>
              <p className="blockquote">
                “engineerworksharrisstudying”
                <br />
                “engineer-works-harris-studying”
              </p>
              <p>
                While it may seem counterintuitive to use a series of random words for a credential, phrases like these are more memorable and far more secure than a password, which typically seeks security through a mix of numbers, special characters, and upper and lowercase letters.
                <br />
                <br />
                Passwords like this—for example, “GenIusc0de123!”—are in fact easier to crack while at the same time more difficult to remember for the user.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sx="6">
              <h3 className="mt-2">What is a Password?</h3>
              <p>
                As we all may know, a Password is a word, phrase, or string of characters intended to differentiate an authorized user or process (for the purpose of permitting access) from an unauthorized user, or put another way a password is used to prove one's identity, or authorize access to a resource.
                <br />
                <br />
                The top 10 most common passwords list you MUST NOT use are:
                <br />
                <br />
              </p>
              <p className="blockquote text-center">
                123456
                <br />
                123456789
                <br />
                qwerty
                <br />
                password
                <br />
                12345
                <br />
                qwerty123
                <br />
                1q2w3e
                <br />
                12345678
                <br />
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default SecretGenerator;
