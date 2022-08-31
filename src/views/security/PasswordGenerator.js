/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Progress,
  CustomInput,
  Row,
  Col,
} from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import TagsInput from "components/TagsInput/TagsInput.js";

const PasswordGenerator = () => {
  const [singleSelect, setsingleSelect] = React.useState(null);
  const [multipleSelect, setmultipleSelect] = React.useState(null);
  const [tagsinput, settagsinput] = React.useState([
    "Amsterdam",
    "Washington",
    "Sydney",
    "Beijing",
  ]);
  const slider1Ref = React.useRef(null);
  const slider2Ref = React.useRef(null);
  React.useEffect(() => {
    var slider1 = slider1Ref.current;
    var slider2 = slider2Ref.current;
    if (slider1.className === "slider") {
      Slider.create(slider1, {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
    if (slider2.className === "slider slider-primary mb-3") {
      Slider.create(slider2, {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
  const handleTagsinput = (tagsinput) => {
    settagsinput(tagsinput);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Row>
                  <Col className="mb-4" md="6">
                    <CardTitle tag="h4">Tags</CardTitle>
                    <TagsInput
                      onChange={handleTagsinput}
                      tagProps={{ className: "react-tagsinput-tag danger" }}
                      value={tagsinput}
                    />
                  </Col>
                  <Col md="6">
                    <CardTitle tag="h4">Dropdown &amp; Dropup</CardTitle>
                    <Row>
                      <Col lg="4" md="6" sm="3">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            aria-expanded={false}
                            aria-haspopup={true}
                            caret
                            className="btn-block"
                            color="primary"
                            data-toggle="dropdown"
                            id="dropdownMenuButton"
                            type="button"
                          >
                            Dropdown
                          </DropdownToggle>
                          <DropdownMenu aria-labelledby="dropdownMenuButton">
                            <DropdownItem header>Dropdown header</DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                      <Col lg="4" md="6" sm="3">
                        <UncontrolledDropdown direction="up">
                          <DropdownToggle
                            caret
                            className="btn-block"
                            color="primary"
                            data-toggle="dropdown"
                            type="button"
                          >
                            Dropup
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Dropdown header</DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-4" md="6">
                    <CardTitle tag="h4">Progress Bars</CardTitle>
                    <div className="progress-container">
                      <span className="progress-badge">Default</span>
                      <Progress max="100" value="25">
                        <span className="progress-value">25%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-primary">
                      <span className="progress-badge">Primary</span>
                      <Progress max="100" value="60">
                        <span className="progress-value">60%</span>
                      </Progress>
                    </div>
                  </Col>
                  <Col md="6">
                    <CardTitle className="mt-3" tag="h4">
                      Sliders
                    </CardTitle>
                    <div className="slider" ref={slider1Ref} />
                    <br />
                    <div
                      className="slider slider-primary mb-3"
                      ref={slider2Ref}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
            {/* end card */}
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">Encoding & Decoding Base64</h3>
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
