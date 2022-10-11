import { useState, useEffect } from "react";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createFeedback } from 'graphql/mutations';
import { v4 as uuid } from 'uuid';

import awsconfig from 'aws-exports';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Collapse,
  FormGroup,
  Input,
  Form,
  Label,
  Button,
  CardFooter,
} from "reactstrap";

import routes from "routes.js";

import { NavLink } from "react-router-dom";

Amplify.configure(awsconfig);

const Home = (props) => {
  const [openedCollapseOne, setopenedCollapseOne] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackName, setFeedbackName] = useState("");

  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [emailState, setEmailState] = useState("");

  useEffect(() => {
    props.sendPageView(props.location.pathname);
  });

  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  function handleEmailChange(e) {
    setFeedbackEmail(e.target.value);

    if (verifyEmail(e.target.value)) {
      setEmailState("has-success");
    } else {
      setEmailState("has-danger");
    }
  }

  const handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();

    if (emailState === "") {
      setEmailState("has-danger");
    }

    if ((emailState === "has-success") && (feedbackName !== "") && (feedbackText !== "")) {
      const feedback = {
        id: uuid(),
        name: feedbackName,
        email: feedbackEmail,
        text: feedbackText
      };
      API.graphql(graphqlOperation(createFeedback, { input: feedback }))
        .then(r => {
          props.handleNotification("Thanks for your message!", "primary");
          setopenedCollapseOne(!openedCollapseOne);
        })
        .catch(e => {
          props.handleNotification("Upss, something went wrong!", "danger");
        });
    }
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <h1>[Toolkys] Must-have Online Free Tools</h1>
                <h3>In Toolkys you will find all online free tools you may need.</h3>
                <h3>From words counter and web risk analyzer to case converting and JSON visualizer.</h3>
                At the moment, we started with some essential tools, but it is growing. Your suggestions and comments will be more than welcome &#128525;
              </CardBody>
              <div
                aria-multiselectable={true}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a
                      className="pt-2 border-top"
                      aria-expanded={openedCollapseOne}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseOne(!openedCollapseOne);
                      }}
                    >
                      &#128680; Wanna more tools? Found a bug? Any kind of feedback? Let me know! {" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseOne}>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <Card>
                            <CardBody className="p-0">
                              <Form>
                                <Row>
                                  <Col xs="6">
                                    <FormGroup>
                                      <Label>Text</Label>
                                      <Input
                                        type="textarea"
                                        placeholder="Here you enter yours suggestions/comments."
                                        className="resizable"
                                        value={feedbackText}
                                        onChange={(e) => setFeedbackText(e.target.value)}
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col xs="6">
                                    <Label>Name</Label>
                                    <FormGroup>
                                      <Input
                                        placeholder="Sam Smith"
                                        type="name"
                                        autoComplete="off"
                                        value={feedbackName}
                                        onChange={(e) => setFeedbackName(e.target.value)}
                                      />
                                    </FormGroup>
                                    <Label>Email</Label>
                                    <FormGroup className={emailState}>
                                      <Input
                                        placeholder="smith.sam@gmail.com"
                                        type="email"
                                        value={feedbackEmail}
                                        onChange={(e) => handleEmailChange(e)}
                                      />
                                      {emailState === "has-danger" ? (
                                        <label className="error">
                                          Please enter a valid email address.
                                        </label>
                                      ) : null}
                                    </FormGroup>
                                    <FormGroup className="position-absolute bottom-2 right-3">
                                      <Button
                                        className="btn-round"
                                        color="primary"
                                        onClick={handleSubmit}
                                      >
                                        <i className="tim-icons icon-spaceship" />
                                      </Button>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          {
            routes.map((prop, key) => {
              if (prop.path !== "/home") {
                return (
                  <Col key={key} lg="4" md="6" sm="12">
                    <Card className="card-stats">
                      <CardHeader>
                        <Row>
                          <Col className="text-left" xs="12">
                            <h5 className="card-category">Tools</h5>
                            <CardTitle tag="h2">{prop.name}</CardTitle>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>

                        {prop.views.map((prop2, key2) => {
                          return (
                            <Row key={key2}>
                              <Col xs="12">
                                <Card className="card-stats card-shadow">
                                  <CardBody>
                                    <Row>
                                      <Col xs="2">
                                        <div className={prop2.iconclass ? prop2.iconclass : prop.iconclass}>
                                          <i className={prop2.iconhome ? prop2.iconhome : prop.icon} />

                                        </div>
                                      </Col>
                                      <Col xs="10">
                                        <div className="numbers">
                                          <p className="card-category">{prop2.subname}</p>
                                          <CardTitle tag="h3">{prop2.name}</CardTitle>

                                        </div>
                                      </Col>
                                    </Row>
                                    <NavLink to={prop2.layout + prop2.path} className="stretched-link" />
                                  </CardBody>
                                  {prop2.new ? (
                                    <CardFooter>
                                      <div className="new-label">
                                        <div className="new-text">NEW!</div>
                                      </div>
                                    </CardFooter>
                                  ) : (
                                    <></>
                                  )}
                                </Card>
                              </Col>
                            </Row>
                          );
                        })}

                      </CardBody>
                    </Card>
                  </Col>
                );
              } else {
                return null;
              }
            })
          }
        </Row>
      </div>
    </>
  );
};

export default Home;
