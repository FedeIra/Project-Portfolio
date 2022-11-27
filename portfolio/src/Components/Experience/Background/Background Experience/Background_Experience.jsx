import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as images from '../../../../Assets/home_images';

const Background_Experience = () => {
  return (
    <div>
      <Container>
        {/* Timeline item 1 */}
        <Row>
          <Col
            className={`
            text-center
            flex-column
            d-none
            d-sm-flex
            `}
            xs={3}
            md={3}
            lg={3}
          >
            <Row
              className={`
              h-50
              `}
            >
              <Col>&nbsp;</Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5
              className={`m-2
            `}
            >
              <span className={`badge bg-dark border`}>&nbsp;</span>
            </h5>
            <Row
              className={`
              h-50
              w-30
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
          </Col>
          <Col
            className={`
            py-2`}
          >
            <div className="card border-dark shadow">
              <div
                className="card-body
              "
              >
                <div className="float-end">Aug. 2015 - June 2022</div>
                <h4 className="d-flex card-title text-muted">
                  <img
                    src={images.baker_picture}
                    alt="portfolio"
                    width="20"
                    className="me-2"
                  />
                  <strong> Baker McKenzie</strong>
                </h4>

                <p className="card-text text-muted">
                  Labour & Employment local and international advise and
                  litigation. Executive and massive terminations, companies
                  start-ups and shutdowns, local and international executive
                  hires, employee compensation and benefits, bargaining of
                  individual and collective employment agreements, labor
                  relations and Trade Union counseling, employment and social
                  security.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Timeline item 2 */}
        <Row>
          <Col
            className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
            xs={3}
            md={3}
            lg={3}
          >
            <Row
              className={`
              h-50
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5 className={`m-2`}>
              <span className={`badge bg-dark border`}>&nbsp;</span>
            </h5>
            <Row
              className={`
              h-50
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
          </Col>
          <Col
            className={`
            py-2`}
          >
            <div className="card">
              <div
                className="card-body
              "
              >
                <div className="float-end"> Aug. 2014 - Oct. 2015</div>
                <h4 className="d-flex card-title text-muted">
                  <img
                    src={images.viviendaDigna_picture}
                    alt="portfolio"
                    width="20"
                    className="me-2"
                  />
                  <strong>Vivienda Digna</strong>
                </h4>
                <p className="card-text text-muted">
                  Legal advice and handling collections (pro bono).
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Timeline item 3 */}
        <Row>
          <Col
            className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
            xs={3}
            md={3}
            lg={3}
          >
            <Row
              className={`
              h-50
              w-30
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5 className={`m-2`}>
              <span className={`badge bg-dark border-success`}>&nbsp;</span>
            </h5>
            <Row
              className={`
              h-50
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
          </Col>
          <Col
            className={`
            py-2`}
          >
            <div className="card">
              <div className="card-body">
                <div className="float-end">Mar. 2015 - Aug. 2015</div>
                <h4 className="d-flex card-title text-muted">
                  <img
                    src={images.mansueti_picture}
                    alt="portfolio"
                    width="20"
                    className="me-2"
                  />
                  <strong>Mansueti Gallo & Sallette</strong>
                </h4>
                <p className="card-text text-muted">
                  Labour & Employment advise and litigation. Employee
                  compensation and benefits, bargaining of individual
                  agreements, labor relations and dismissals.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Timeline item 3 */}
        <Row>
          <Col
            className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
            xs={3}
            md={3}
            lg={3}
          >
            <Row
              className={`
              h-50
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5 className={`m-2`}>
              <span className={`badge bg-dark border`}>&nbsp;</span>
            </h5>
            <Row
              className={`
              h-50
              `}
            >
              <Col
                className={`
                border-end
                `}
              >
                &nbsp;
              </Col>
              <Col>&nbsp;</Col>
            </Row>
          </Col>
          <Col
            className={`
            py-2`}
          >
            <div className="card">
              <div
                className="card-body
              "
              >
                <div className="float-end"> July. 2008 - Mar. 2009</div>
                <h4 className="d-flex card-title text-muted">
                  <img
                    src={images.navarro_picture}
                    alt="portfolio"
                    width="20"
                    className="me-2"
                  />
                  <strong>Navarro Castex</strong>
                </h4>
                <p className="card-text text-muted">
                  Legal support in litigation, translation and case law
                  research.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* end time line */}
      </Container>
    </div>
  );
};

export default Background_Experience;
