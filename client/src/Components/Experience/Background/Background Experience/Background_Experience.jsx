import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as images from "../../../../Assets/indexExportImages";
import style from "./Background_Experience.module.css";

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
              h-0
              `}
            >
              <Col>&nbsp;</Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5
              className={`m-0
            `}
            >
              <span
                className={`badge border`}
                style={{
                  backgroundColor: "#2ECC71",
                }}
              >
                &nbsp;
              </span>
            </h5>
            <Row
              className={`
              h-100
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
            py-3`}
          >
            <div
              className="card"
              style={{
                borderRadius: "0",
              }}
            >
              <div
                className="card-body
              "
                style={{
                  backgroundColor: "rgba(4, 1, 19, 0.9)",
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>2015 - 2022</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.baker_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong> Baker McKenzie</strong>
                </h4>
                <p className="card-text text-white">
                  Labour & Employment local and international advise and
                  litigation.{" "}
                </p>
                <br />
                <p className="card-text text-white">
                  Executive and massive terminations, companies start-ups and
                  shutdowns, local and international executive hires, employee
                  compensation and benefits, bargaining of individual and
                  collective employment agreements, labor relations and Trade
                  Union counseling, employment and social security.
                  Additionally, I led teams of junior and semi-senior lawyers
                  and paralegals.
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
              h-0
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
            <h5 className={`m-0`}>
              <span className={`badge bg-success border`}>&nbsp;</span>
            </h5>
            <Row
              className={`
              h-100
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
            <div
              className="card"
              style={{
                borderRadius: "0",
              }}
            >
              <div
                className="card-body
              "
                style={{
                  backgroundColor: "rgba(4, 1, 19, 0.9)",
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>2014 - 2015</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.viviendaDigna_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Vivienda Digna</strong>
                </h4>
                <p className="card-text text-white">
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
              h-0
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
            <h5 className={`m-0`}>
              <span className={`badge bg-success border`}>&nbsp;</span>
            </h5>
            <Row
              className={`
              h-100
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
            py-3`}
          >
            <div
              className="card"
              style={{
                borderRadius: "0",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgba(4, 1, 19, 0.9)",
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>2015 - 2015</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.mansueti_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Mansueti Gallo & Sallette</strong>
                </h4>
                <p className="card-text text-white">
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
              h-0
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
            <h5 className={`m-0`}>
              <span className={`badge bg-success border`}>&nbsp;</span>
            </h5>
          </Col>
          <Col
            className={`
            py-2`}
          >
            <div
              className="card"
              style={{
                borderRadius: "0",
              }}
            >
              <div
                className="card-body
              "
                style={{
                  backgroundColor: "rgba(4, 1, 19, 0.9)",
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}> 2008 - 2009</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.navarro_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Navarro Castex</strong>
                </h4>
                <p className="card-text text-white">
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
