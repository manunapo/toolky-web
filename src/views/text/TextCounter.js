import { useState, useEffect } from "react";
// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Table,
} from "reactstrap";

const TextCounter = (props) => {
  const [text, setText] = useState();
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [totalCharactersWithoutSpaces, setTotalCharactersWithoutSpaces] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [totalParagraphs, setTotalParagraphs] = useState(0);
  const [uniqueWords, setUniqueWords] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [keywordDensityTableBody, setKeywordDensityTableBody] = useState(
    <tbody>
      <tr>
        <td>
          Start typing to get a list of frequently used keywords.
        </td>
      </tr>
    </tbody>
  );

  useEffect(() => {
    props.sendPageView(props.location.pathname);
  });

  function isNumber(char) {
    return /^\d$/.test(char);
  };

  function containsNumber(str) {
    return /\d/.test(str);
  };

  function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  };

  function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  };

  function isUppercase(word) {
    return /^\p{Lu}/u.test(word);
  }

  const handleTextChange = event => {
    let newText = event.target.value;

    setText(newText);

    setTotalCharacters(newText.length);

    setTotalCharactersWithoutSpaces(newText.replaceAll(/[ \n]/g, '').length);

    const paragraphs = newText.split('\n').filter(function (e) {
      return e !== "";
    });
    setTotalParagraphs(paragraphs.length);

    var sentences = [];
    paragraphs.forEach(element => {
      let subSentences = element.replaceAll(/[?|!]/g, '.').split('.').filter(function (e) {
        return (e.replaceAll(/ +/g, "") !== "");
      });
      subSentences = subSentences.map(s => s.trim());
      sentences.push(...subSentences);
    });
    setTotalSentences(sentences.filter(s => isUppercase(s[0])).length);

    // word:amount
    var words = {};
    var totalWords = 0;
    sentences.forEach(sentence => {
      // match spaces, new lines, tabs -> /\s\s+/g
      // match +1 spaces -> /  +/g
      sentence.replace(/\s\s+/g, ' ');
      let word = "";
      for (var i = 0; i < sentence.length; i++) {
        let c = sentence.charAt(i);
        let newWord = false;
        if (isLetter(c) || isNumber(c) || c === '-') {
          word += c;
        } else {
          newWord = true;
        }

        if (newWord || (i + 1 === sentence.length)) {
          if (containsNumber(word) || containsAnyLetter(word)) {
            if (word in words) {
              words[word] += 1;
            } else {
              words[word] = 1;
            }
            totalWords += 1;
          }
          word = "";
        }

      }
    });
    setTotalWords(totalWords);

    setUniqueWords(Object.keys(words).length);

    setReadingTime(Math.ceil(totalWords / 210));

    var items = Object.keys(words).map(function (key) {
      return [key, words[key]];
    });
    items.sort((first, second) => {
      return second[1] - first[1];
    });
    let maxKeywords = items.length > 10 ? 10 : items.length;
    let filteredKeywordDensity = items.slice(0, maxKeywords);
    setKeywordDensityTableBody(
      <tbody>
        {
          filteredKeywordDensity.map(([word, amount]) => (
            <tr key={Math.floor(Math.random() * 10000)}>
              <td className="text-left">{word}</td>
              <td className="text-right">
                <Badge color="danger">{amount} (%{(amount * 100 / totalWords).toFixed(2)})
                </Badge>
              </td>
            </tr>
          ))
        }
      </tbody>
    );
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="12">
                    <div className="numbers">
                      <p className="card-category">Characters</p>
                      <CardTitle tag="h2">{totalCharacters}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="12">
                    <div className="numbers">
                      <p className="card-category">Characters without spaces</p>
                      <CardTitle tag="h2">{totalCharactersWithoutSpaces}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="12">
                    <div className="numbers">
                      <p className="card-category">Words</p>
                      <CardTitle tag="h2">{totalWords}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="12">
                    <div className="numbers">
                      <p className="card-category">Sentences</p>
                      <CardTitle tag="h2">{totalSentences}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card className="fill-parent card-stats">
              <CardHeader>
                <p className="card-category">Online Tool</p>
                <CardTitle tag="h2">Character and Text Analyzer</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="#">

                  <FormGroup>
                    <Input
                      type="textarea"
                      className="resizable"
                      placeholder="Type in or copy and paste your text here"
                      value={text}
                      onChange={handleTextChange}
                    />
                  </FormGroup>
                </Form>

              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Row>
              <Card className="card-stats">
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-left">Text Analisys</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">Paragraphs</td>
                        <td className="text-right">
                          <Badge color="danger">{totalParagraphs}
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">Unique Words</td>
                        <td className="text-right">
                          <Badge color="danger">{uniqueWords}
                          </Badge>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">Reading Time</td>
                        <td className="text-right">
                          <Badge color="danger">{readingTime} min
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Row>
            <Row>
              <Card className="card-stats">
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-left">Keyword Density</th>
                      </tr>
                    </thead>
                    {keywordDensityTableBody}
                  </Table>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
        <h1 className="title mt-5 text-center">Character and Words Counter &#128224;</h1>
        <CardBody>
          <Row>
            <Col sx="4">
              <h2 className="mt-2">What is a sentence?</h2>
              <div className="text-justify">
                <p>
                  A sentence is a group of words which, when they are written down, <mark>begin with a capital letter and end with a full stop, question mark, or exclamation mark</mark>. Most sentences contain a subject and a verb.
                </p>
              </div>
            </Col>
            <Col sx="4">
              <h2 className="mt-2">What is a paragraph?</h2>
              <div className="text-justify">
                <p>
                  A good example of a paragraph <mark>contains a topic sentence, details and a conclusion</mark>. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.
                </p>
              </div>
            </Col>
            <Col xs="12">
              <h2 className="mt-5">How to estimate the reading time?</h2>
              <div className="text-justify">
                <p className="">Research varies, but generally, <mark>the average adult reads 200-250 words in one minute</mark>. You can use this information to calculate the estimated time to read.</p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div >
    </>
  );
};

export default TextCounter;
