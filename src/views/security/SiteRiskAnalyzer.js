import { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { getWebRisk, getTlsCert } from 'graphql/queries';
import isFQDN from 'validator/es/lib/isFQDN';

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Table,
  Input,
} from "reactstrap";

import riskImage from "assets/img/image-risk.png";
import noRiskImage from "assets/img/image-no-risk.png";

const SiteRiskAnalyzer = (props) => {
  const [searchBox, setSearchBox] = useState("");
  const [certificateInfo, setCertificateInfo] = useState(<></>);
  const [webRiskInfo, setWebRiskInfo] = useState(<></>);

  useEffect(() => {
    props.sendPageView(props.location.pathname);
  });

  const loadingStatus = <>
    <tr>
      <td className="text-left">
        <span className="mr-2">Loading...</span>
      </td>
      <td className="text-right">
        <span className="ml-n2">
          <i className="fas fa-spinner fa-pulse" />
        </span>
      </td>
    </tr>
  </>;

  function fillTlsCertificateInfoSuccess(data) {
    let dataJSON = JSON.parse(data.body).certificate;
    console.log(dataJSON);
    if (data.statusCode === 200) {
      setCertificateInfo(
        <>
          <tr>
            <td className="text-left">
              <span className="mr-2">Issuer</span>
            </td>
            <td className="text-right">
              <span className="ml-n2 response-label-neutral">{dataJSON.issuer.O}</span>
            </td>
          </tr>
          <tr>
            <td className="text-left">
              <span className="mr-2">Alternative Name</span>
            </td>
            <td className="text-right">
              <span className="ml-n2 response-label-neutral">{dataJSON.subjectaltname}</span>
            </td>
          </tr>
          <tr>
            <td className="text-left">
              <span className="mr-2">Valid to</span>
            </td>
            <td className="text-right">
              <span className="ml-n2 response-label-neutral">{dataJSON.valid_to}</span>
            </td>
          </tr>
        </>
      );
    }
  }

  function fillInfoError(err_msg = "") {
    setCertificateInfo(
      <>
        <tr>
          <td className="text-left">
            <span className="mr-2">{err_msg}</span>
          </td>
          <td className="text-right">
            <div className="response-icon-risk">
              <i className="tim-icons icon-alert-circle-exc" />
            </div>
          </td>
        </tr>
      </>
    );
  }

  function fillWebRiskInfoSuccess(data) {
    let dataJSON = JSON.parse(data.body);
    if (data.statusCode === 200) {
      let malware = false;
      let socialEngineering = false;
      let unwantedSoftware = false;
      var content =
        <>
          <tr>
            <td className="text-left">
              <span className="mr-2">No Threats Found</span>
            </td>
            <td className="text-right">
              <div className="response-icon-neutral">
                <i className="tim-icons icon-check-2" />
              </div>
            </td>
          </tr>
        </>

      if ('threatTypes' in dataJSON) {
        dataJSON.threatTypes.forEach(e => {
          if (e === "MALWARE") malware = true;
          if (e === "SOCIAL_ENGINEERING") socialEngineering = true;
          if (e === "UNWANTED_SOFTWARE") unwantedSoftware = true;
        });

        content =
          <>
            {malware ?
              <tr>
                <td className="text-left">
                  <span className="mr-2">MALWARE</span>
                </td>
                <td className="text-right">
                  <div className="response-label-risk ">
                    Risk!
                  </div>
                  <div className="response-icon-risk">
                    <i className="tim-icons icon-alert-circle-exc" />
                  </div>
                </td>
              </tr>
              : (<></>)}
            {socialEngineering ?
              <tr>
                <td className="text-left">
                  <span className="mr-2">SOCIAL_ENGINEERING</span>
                </td>
                <td className="text-right">
                  <span className="ml-n2">
                    <div className="response-label-risk">
                      Risk!
                    </div>
                    <div className="response-icon-risk">
                      <i className="tim-icons icon-alert-circle-exc" />
                    </div>
                  </span>
                </td>
              </tr>
              : (<></>)}
            {unwantedSoftware ?
              <tr>
                <td className="text-left">
                  <span className="mr-2">UNWANTED_SOFTWARE</span>
                </td>
                <td className="text-right">
                  <span className="ml-n2">
                    <div className="response-icon-risk">
                      Risk!
                    </div>
                    <div className="response-label-risk">
                      <i className="tim-icons icon-alert-circle-exc" />
                    </div>
                  </span>
                </td>
              </tr>
              : (<></>)}
          </>;
      }
      setWebRiskInfo(content);
    }
  }

  const handleSearchButton = function () {
    if (searchBox !== "") {

      let hostname = searchBox;
      if (!isFQDN(searchBox)) {
        let url = document.createElement("a");
        url.href = searchBox;
        hostname = url.hostname;
      }

      setCertificateInfo(loadingStatus);
      API.graphql(graphqlOperation(getTlsCert, { url: hostname }))
        .then(r => {
          if (r.data.getTlsCert.statusCode === 200)
            fillTlsCertificateInfoSuccess(r.data.getTlsCert);
          else {
            fillInfoError("Can not be validated!");
          }
        })
        .catch(e => {
          fillInfoError("Can not be validated!");
        });

      setWebRiskInfo(loadingStatus);
      API.graphql(graphqlOperation(getWebRisk, { url: searchBox }))
        .then(r => {
          if (r.data.getWebRisk.statusCode === 200)
            fillWebRiskInfoSuccess(r.data.getWebRisk);
          else
            fillInfoError("Ups, there was some problem");
        })
        .catch(e => {
          fillInfoError("Ups, there was some problem");
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
                <h5 className="card-category">Let's ask Goolge!</h5>
              </CardHeader>
              <Card>
                <CardBody>
                  <Row>
                    <Col xs="12">
                      <Card>
                        <CardBody className="web-analyzer-bar">
                          <Input
                            className="search-bar"
                            placeholder="www.google.com"
                            type="name"
                            autoComplete="off"
                            value={searchBox}
                            onChange={(e) => setSearchBox(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSearchButton();
                              }
                            }}
                          />
                          <div
                            className="search-icon text-center"
                            onClick={handleSearchButton}
                          >
                            <i className="tim-icons icon-zoom-split" />
                          </div>
                        </CardBody>
                        <CardBody>
                          <CardHeader></CardHeader>
                          <Row>
                            <Col xs="12">
                              <Table responsive>
                                <thead className="text-primary">
                                  <tr>
                                    <th className="text-left">Certificate Information</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {certificateInfo}
                                </tbody>
                                <thead className="text-primary">
                                  <tr>
                                    <th className="text-left">Google Web Risk</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {webRiskInfo}
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Card>
          </Col>
        </Row>
        <h3 className="title mt-5 text-center">Web Site Risk Analyzer &#128373;</h3>
        <CardBody>
          <Row>
            <Col sx="6">
              <p className="text-center">
                Here at Toolkys we created a tool for easily checking if a website seems to be safe. "Seems" because we never could be 100% sure.
                <br />
                <br />
                By searching the URL above, toolkys will be doing 2 main actions: first, retrieving its SSL certificate for easier comprehension, and second, calling Google's Web Risk API.
                <br />
                <br />
              </p>
              <p className="blockquote text-center">
                &#128680; PLEASE, although we do not find any threat, be aware that a site can still be unsafe! &#128680;
              </p>
            </Col>
          </Row>
          <Row>
            <Col sx="6">
              <Card>
                <CardHeader>
                  <h3 className="mt-2">What makes a Web Site secure?</h3>
                </CardHeader>
                <CardBody>
                  <p>
                    Look at the uniform resource locator (URL) of the website. A secure URL should begin with “https” rather than “http.” The “s” in “https” stands for secure, which indicates that the site is using a Secure Sockets Layer (SSL) Certificate. This lets you know that all your communication and data is encrypted as it passes from your browser to the website’s server.
                    <br />
                    <br />
                    Look for a lock icon near your browser’s location field. The lock symbol and related URL containing “https” simply mean that the connection between your web browser and the website server is encrypted, which is important.
                    <br />
                    <br />
                    But don’t be fooled into thinking the website you’re going to is secure—it may not be.
                    <br />
                    <br />
                    We gather this information automatically for you, now you just need to check if the Issuer and Alternative Name match with the site you are trying to access.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col sx="6">
              <Card>
                <CardHeader>
                  <h3 className="mt-2">What Google Web Risk does?</h3>
                </CardHeader>
                <CardBody>
                  <p>
                    Web Risk is a Google Cloud service that lets client applications check URLs against Google's constantly updated lists of unsafe web resources.
                    <br />
                    <br />
                    <a
                      href="https://cloud.google.com/web-risk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Web Risk API
                    </a>
                    <br />
                    <br />
                    Unsafe web resources include social engineering sites—such as phishing and deceptive sites—and sites that host malware or unwanted software.
                    <br />
                    <br />
                    With Web Risk, you can quickly identify known bad sites, and warn users before they click infected links.
                    <br />
                    <br />
                    Web Risk includes data on more than a million unsafe URLs and stays up to date by examining billions of URLs each day.
                    <br />
                    <br />
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h3 className="mt-2">How a unsafe site would look like?</h3>
                </CardHeader>
                <CardBody>
                  <p>
                    In Certificate Information you will find the data regarding to the URL certificate. You can use this names and Valid information to determinate if the site seems safe.
                    <br />
                    <br />
                  </p>
                  <p className="text-center border border-dark">
                    <img src={riskImage} alt="..." height="600" />
                  </p>
                  <p>
                    <br />
                    <br />
                    If the site does not have a valid certificate or it does not even have one. You will take some risk!
                    <br />
                    <br />
                    Google may report up to 3 types of threats:
                    <br />
                    <br />
                  </p>
                  <p className="blockquote text-center">
                    MALWARE, SOCIAL_ENGINEERING and UNWANTED_SOFTWARE
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h3 className="mt-2">How a unsafe site would look like?</h3>
                </CardHeader>
                <CardBody>
                  <p>
                    If Google does not have any track of suspicious activity for the domain. Toolkys will show a "No Threats Found" message like:
                    <br />
                    <br />
                  </p>
                  <p className="text-center border border-dark">
                    <img src={noRiskImage} alt="..." height="300" />
                  </p>
                  <p>
                    <br />
                    <br />
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default SiteRiskAnalyzer;
