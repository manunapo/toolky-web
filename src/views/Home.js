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
                <CardTitle tag="h2">Toolky</CardTitle>
              </CardHeader>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia
                aute, non cupidatat skateboard dolor brunch. Food truck
                quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et.
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
                      aria-expanded={openedCollapseOne}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseOne(!openedCollapseOne);
                      }}
                    >
                      Wanna more tools? Found a bug? Let me know! {" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseOne}>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <Card>
                            <CardBody>
                              <Form action="#">
                                <Row>
                                  <Col xs="6">
                                    <FormGroup>
                                      <Label>Text</Label>
                                      <Input type="textarea" placeholder="Here you enter yours suggestions/comments." className="min-height" />
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
                                    <Button className="btn-fill float-right" type="submit">
                                      Submit
                                    </Button>
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
          {
            routes.map((prop, key) => {
              if (prop.path !== "/home") {
                return (
                  <>
                    <Col xs="12">
                      <Card className="card-stats">
                        <CardHeader>
                          <Row>
                            <Col className="text-left">
                              <h5 className="card-category">Tools</h5>
                              <CardTitle tag="h2">{prop.name}</CardTitle>
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            {prop.views.map((prop2, key2) => {
                              return (
                                <Col lg="3" md="4">
                                  <div>
                                    <Card className="card-stats card-shadow">
                                      <CardBody>
                                        <Row>
                                          <Col xs="5">
                                            <div className={prop.iconclass}>
                                              <i className={prop.icon} />
                                            </div>
                                          </Col>
                                          <Col xs="7">
                                            <div className="numbers">
                                              <p className="card-category">{prop2.subname}</p>
                                              <CardTitle tag="h3">{prop2.name}</CardTitle>
                                            </div>
                                          </Col>
                                        </Row>
                                        <NavLink to={prop2.layout + prop2.path} className="stretched-link" />
                                      </CardBody>
                                    </Card>
                                  </div>
                                </Col>
                              );
                            })}
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </>
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
