import { useState } from "react";

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

const CaseConverter = (props) => {
  const [textArea, setTextArea] = useState("");

  String.prototype.randomCase = function () {
    var flip = '';
    for (var i = 0; i < this.length; i++) {
      if (Math.random() > .5) {
        flip += this.charAt(i).toUpperCase();
      } else {
        flip += this.charAt(i).toLowerCase();
      }
    }
    return flip;
  }

  String.prototype.toCamelCase = function () {
    let string = this.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
      .reduce((result, word) => result + word.toLowerCase().toTitleCase())
    return string.charAt(0).toLowerCase() + string.slice(1)
  }
  String.prototype.toTitleCase = function () {
    return this.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  String.prototype.toggleCase = function () {
    var stringArray = this.valueOf().split(''); // Turn string into array

    stringArray = stringArray.map(function (current, index, stringArray) {
      if (current.toLowerCase() === current) {
        return current.toUpperCase(); // If a character is lowercase, switch to uppercase
      } else {
        return current.toLowerCase(); // Else, switch to lowercase
      }
    });
    return stringArray.join(''); // Join array into string again
  }

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
                  <Col xs="12">
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => setTextArea(textArea.randomCase())}
                    >
                      RaNDom caSE
                    </Button>
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => setTextArea(textArea.toCamelCase())}
                    >
                      camelCase
                    </Button>
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => setTextArea(textArea.toTitleCase())}
                    >
                      Title Case
                    </Button>
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => setTextArea(textArea.toggleCase())}
                    >
                      tOGGLE cASE
                    </Button>
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => setTextArea(textArea.toUpperCase())}
                    >
                      UPPER CASE
                    </Button>
                    <Button
                      className="btn-fill float-right"
                      type="submit"
                      onClick={() => setTextArea(textArea.toLowerCase())}
                    >
                      lower case
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">Text Case Converter</h3>
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
