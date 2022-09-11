import React from "react";

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

const SiteRiskAnalyzer = () => {

  
  React.useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="content">
        <Row>
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

export default SiteRiskAnalyzer;
