import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input,
  Button,
  Table,
  UncontrolledTooltip,
  CardFooter,
} from "reactstrap";

const Timestamp = (props) => {
  const [currentTimeInEpoch, setCurrentTimeInEpoch] = useState(Math.floor(new Date().getTime() / 1000.0));
  const [editableTimeInEpoch, setEditableTimeInEpoch] = useState(Math.floor(new Date().getUTCDate() / 1000.0));

  useEffect(() => {
    props.sendPageView(props.location.pathname);
    const intervalId = setInterval(() => {
      setCurrentTimeInEpoch(Math.floor(new Date().getTime() / 1000.0));
    }, 1000);

    return () => clearInterval(intervalId);
  });

  function epochToUTC(epochTime) {
    return new Date(epochTime * 1000).toUTCString();
  };

  function epochToLocalTime(epochTime) {
    return new Date(epochTime * 1000).toLocaleString();
  };

  const handleFullTimeConverter = (event) => {
    setEditableTimeInEpoch(new Date(event.target.value).getTime() / 1000.0);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">The current Time is</CardTitle>
              </CardHeader>
              <CardBody className="text-center">
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center"></th>
                      <th className="text-center"></th>
                      <th className="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-right">Unix Epoch time</td>
                      <td className="text-right">{currentTimeInEpoch}</td>
                      <td className="text-left">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367700"
                          size="sm"
                          onClick={() => { navigator.clipboard.writeText(currentTimeInEpoch) }}
                        >
                          <i className="tim-icons icon-single-copy-04" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367700"
                        >
                          Copy
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-right">UTC/GMT</td>
                      <td className="text-right">{epochToUTC(currentTimeInEpoch)}</td>
                      <td className="text-left">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367701"
                          size="sm"
                          onClick={() => { navigator.clipboard.writeText(epochToUTC(currentTimeInEpoch)) }}
                        >
                          <i className="tim-icons icon-single-copy-04" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367701"
                        >
                          Copy
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-right">Your local timezone</td>
                      <td className="text-right">{epochToLocalTime(currentTimeInEpoch)}</td>
                      <td className="text-left">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367702"
                          size="sm"
                          onClick={() => { navigator.clipboard.writeText(epochToLocalTime(currentTimeInEpoch)) }}
                        >
                          <i className="tim-icons icon-single-copy-04" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367702"
                        >
                          Copy
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Human-readable date {"<->"} Epoch</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center"></th>
                      <th className="text-center"></th>
                      <th className="text-right">
                        <Button
                          className="btn-link btn-icon"
                          color="danger"
                          size="sm"
                          onClick={() => setEditableTimeInEpoch(0)}
                        >
                          <i className="tim-icons icon-refresh-01"
                            id="tooltip324367704"
                          />
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip324367704"
                          >
                            Reset
                          </UncontrolledTooltip>
                        </Button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-right">Unix Epoch time</td>
                      <td className="text-right">
                        <Row>
                          <Col xs="3">
                          </Col>
                          <Col xs="9">
                            <Input type="text"
                              className="text-right"
                              value={editableTimeInEpoch}
                              onChange={(event) => setEditableTimeInEpoch(event.target.value)}
                            />
                          </Col>
                        </Row>
                      </td>
                      <td className="text-left">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367703"
                          size="sm"
                          onClick={() => { navigator.clipboard.writeText(editableTimeInEpoch) }}
                        >
                          <i className="tim-icons icon-single-copy-04" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367703"
                        >
                          Copy
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-right">UTC/GMT</td>
                      <td className="text-right">
                        <Row>
                          <Col xs="3">
                          </Col>
                          <Col xs="9">
                            <Input type="text"
                              className="text-right"
                              id="tooltip324367707"
                              value={epochToUTC(editableTimeInEpoch)}
                              onChange={handleFullTimeConverter}
                            />
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip324367707"
                            >
                              You can make 1 change at a time. <br />Tip: copy & paste.
                            </UncontrolledTooltip>
                          </Col>
                        </Row>
                      </td>
                      <td className="text-left">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367708"
                          size="sm"
                          onClick={() => { navigator.clipboard.writeText(epochToUTC(editableTimeInEpoch)) }}
                        >
                          <i className="tim-icons icon-single-copy-04" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367708"
                        >
                          Copy
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-right">Your local timezone</td>
                      <td className="text-right">
                        <Row>
                          <Col xs="3">
                          </Col>
                          <Col xs="9">
                            <Input type="text"
                              className="text-right"
                              id="tooltip324367709"
                              value={epochToLocalTime(editableTimeInEpoch)}
                              onChange={handleFullTimeConverter}
                            />
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip324367709"
                            >
                              You can make 1 change at a time. <br />Tip: copy & paste.
                            </UncontrolledTooltip>
                          </Col>
                        </Row>
                      </td>
                      <td className="text-left">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367710"
                          size="sm"
                          onClick={() => { navigator.clipboard.writeText(epochToLocalTime(editableTimeInEpoch)) }}
                        >
                          <i className="tim-icons icon-single-copy-04" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip324367710"
                        >
                          Copy
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h1 className="title mt-5 text-center">Timestamps and Date times &#128338;</h1>
        <CardBody>
          <Row>
            <Col sx="4">
              <h2 className="mt-2">What is epoch time?</h2>
              <div className="text-justify">
                <p>
                  The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00:00:00Z).
                  <br />
                  <br />
                  Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. S
                </p>
              </div>
            </Col>
            <Col sx="4">
              <h2 className="mt-2">This tool</h2>
              <div className="text-justify">
                <p>
                  You have a real time panel where you can enter times in either epoch format or human-readable format.
                  <br />
                  <br />
                  For the human-readable dates, the box will react to the on change event, so you need to either copy and paste the entire date, or select one character and hit the key to replace it. Meaning one change at a time.
                </p>
              </div>
            </Col>
            <Col xs="12">
              <h2 className="mt-5">Current Timestamp Examples</h2>
              <div className="text-justify">
                <p>
                  These examples are showing how to get current unix timestamp in seconds. These examples are returning timestamp in seconds, although some of the languages are returning timestamp in milliseconds.
                </p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-javascript.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            new Date().getTime()/1000;
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    JavaScript
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-python.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            import time
                          </code>
                          <br />
                          <code>
                            time.time()
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Python
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-bash.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            date +"%s"
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Bash
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-php.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            time();
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    PHP
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs="12">
              <h2 className="mt-5">Current Date and Time Examples</h2>
              <div className="text-justify">
                <p>These examples are showing how to get current date and time that could be presented to the end-user.</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-javascript.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            new Date().toLocaleString();
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    JavaScript
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-python.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            import datetime
                          </code>
                          <br />
                          <code>
                            datetime.datetime.now().isoformat()
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Python
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-bash.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            date
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Bash
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-php.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            date("Y-m-d H:i:s", time());
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    PHP
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs="12">
              <h2 className="mt-5">Timestamp to Date Examples</h2>
              <div className="text-justify">
                <p>
                  These examples are showing how to convert timestamp - either in milliseconds or seconds to human readable form.
                </p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-javascript.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            new Date(1659531966 * 1000).toLocaleString();
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    JavaScript
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-python.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            import datetime
                          </code>
                          <br />
                          <code>
                            datetime.datetime.fromtimestamp(1659531966).isoformat()
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Python
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-bash.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>

                            date +"%Y-%m-%d %H:%M:%S" -d @1659531966
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    Bash
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="2">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require('assets/img/logo-php.png')}
                        />
                      </div>
                    </Col>
                    <Col xs="10">
                      <div className="numbers">
                        <CardTitle tag="h4">
                          <code>
                            date("Y-m-d H:i:s", 1659531966);
                          </code>
                        </CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    PHP
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </div >
    </>
  );
};

export default Timestamp;
