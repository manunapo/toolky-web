import { useState, useEffect } from "react";
import { randomCase, toCamelCase, toTitleCase, toggleCase } from "helpers/CaseFormatter.js";

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

const CaseConverter = (props) => {
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    props.sendPageView(props.location.pathname);
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h5 className="card-category">Text Case</h5>
                <CardTitle tag="h2">Converter</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="#">
                  <label>Simply enter your text and then click the desired button below.</label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      className="resizable"
                      placeholder="Type in or copy and paste your text here"
                      value={textArea}
                      onChange={e => setTextArea(e.target.value)}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col sm="6" md="4">
                    <Button
                      className="btn-fill btn-block"
                      type="submit"
                      onClick={() => setTextArea(textArea.toUpperCase())}
                    >
                      UPPER
                    </Button>
                  </Col>
                  <Col sm="6" md="4">
                    <Button
                      className="btn-fill btn-block"
                      type="submit"
                      onClick={() => setTextArea(textArea.toLowerCase())}
                    >
                      lower
                    </Button>
                  </Col>
                  <Col sm="6" md="4">
                    <Button
                      className="btn-fill btn-block"
                      type="submit"
                      onClick={() => setTextArea(toCamelCase(textArea))}
                    >
                      camelCase
                    </Button>
                  </Col>
                  <Col sm="6" md="4">
                    <Button
                      className="btn-fill btn-block"
                      type="submit"
                      onClick={() => setTextArea(toTitleCase(textArea))}
                    >
                      Title
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6" md="4">
                    <Button
                      className="btn-fill btn-block"
                      type="submit"
                      onClick={() => setTextArea(toggleCase(textArea))}
                    >
                      tOGGLE
                    </Button>
                  </Col>
                  <Col sm="6" md="4">
                    <Button
                      className="btn-fill btn-block"
                      type="submit"
                      onClick={() => setTextArea(randomCase(textArea))}
                    >
                      RaNDom
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">Text Case Converter &#128288;</h3>
        <CardBody>
          <Row>
            <Col sx="4">
              <h3 className="mt-2">Convert Text to Upper Case</h3>
              <p>
                The uppercase converter will change any text into capital letters. It will keep all existing capital letters and convert all lowercase letters to capitals.
              </p>
              <br />
              <br />
              Using all capital letters for your sentence can help it stand out to readers. This converter is a quick and easy way to change headers, titles, and large amounts of text into capital letters.
              <br />
              <br />
              <p className="blockquote">
                HERE IS AN EXAMPLE OF UPPERCASE TEXT.
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-2">Convert Text to Lower Case</h3>
              <p>
                The lowercase converter will change all of your text into lowercase letters. This means it will change all capital letters contained within your text (including names, places, titles, and the first word of a new sentence) to lowercase letters.
              </p>
              <br />
              <br />
              <p className="blockquote">
                here is an example of lowercase text.
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-2">Toggle Case</h3>
              <p>
                The toggle case converter will change your lowercase letters to uppercase, and uppercase letters to lowercase.
              </p>
              <br />
              <br />
              <p className="blockquote">
                Example: ToGGLE CasE {"->"} tOggle cASe
              </p>
            </Col>
          </Row>
          <Row>
            <Col sx="4">
              <h3 className="mt-2">Convert Text to Title Case</h3>
              <p>
                Also known as Proper Case.
                The capital case converter will capitalize the first letter of each word. This is great for students, professionals, or bloggers who are writing titles when writing for the web.
              </p>
              <br />
              <br />
              <p className="blockquote">
                Here Is An Example Of Proper Case.
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-2">Convert Text to Camel Case</h3>
              <p>
                Camel case is the practice of writing phrases without spaces or punctuation. It indicates the separation of words with a single capitalized letter, and the first word starting with either case. Common examples include "iPhone" and "eBay". It is also sometimes used in online usernames such as "johnSmith", and to make multi-word domain names more legible.
              </p>
              <br />
              <br />
              <p className="blockquote">
                hereIsAnExampleOfCamelCase
              </p>
            </Col>
            <Col sx="4">
              <h3 className="mt-2">Convert Text to Random Case</h3>
              <p>
                The random case calculator will change your text so that it randomly includes a mix of upper and lowercase letters. Since the random case converter is randomized, different letters of your text will alternate between being uppercase and lowercase every time you use the tool.
              </p>
              <br />
              <br />
              <p className="blockquote">
                hErE iS aN eXAmpLe oF RAndOm CaSe.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default CaseConverter;
