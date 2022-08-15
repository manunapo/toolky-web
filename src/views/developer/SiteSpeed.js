import React from "react";
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Collapse,
} from "reactstrap";

// core components
import {
  chartExample2,
} from "variables/charts.js";

const SiteSpeed = () => {
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(true);
 
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left">
                    <h5 className="card-category">What can I find in?</h5>
                    <CardTitle tag="h2">Toolky</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Collapse role="tabpanel" isOpen={openedCollapseOne}>
                  <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice
                    lomo. Leggings occaecat craft beer farm-to-table, raw
                    denim aesthetic synth nesciunt you probably haven't heard
                    of them accusamus labore sustainable VHS.
                  </CardBody>
                </Collapse>
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-primary" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SiteSpeed;
