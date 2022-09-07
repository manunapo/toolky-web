import React from "react";

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
  Input,
  Form,
  Label,
  Button,
} from "reactstrap";

import routes from "routes.js";

import { NavLink } from "react-router-dom";

const Home = () => {
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(false);

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h5 className="card-category">What is?</h5>
              </CardHeader>
              <CardBody>
                <h4 className="mb-0">
                  Toolky is a web page with handy web tools.
                  <br />
                  At the moment, we started with some essential tools, but it will keep growing. Your suggestions and comments will be more than welcome &#128525;
                </h4>
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
                              <Form action="#">
                                <Row>
                                  <Col xs="6">
                                    <FormGroup>
                                      <Label>Text</Label>
                                      <Input type="textarea" placeholder="Here you enter yours suggestions/comments." className="resizable" />
                                    </FormGroup>
                                  </Col>
                                  <Col xs="6">
                                    <FormGroup>
                                      <Label>Name</Label>
                                      <Input placeholder="Sam Smith" type="name" autoComplete="off" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label>Email address</Label>
                                      <Input placeholder="smith.sam@gmail.com" type="email" />
                                    </FormGroup>
                                    <FormGroup className="position-absolute bottom-0 right-3">
                                      <Button className="btn-round" color="primary">
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
                                        <div className={prop.iconclass}>
                                          <i className={prop.icon} />
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
