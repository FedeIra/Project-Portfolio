import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as images from '../../../../Assets/home_images';
import style from './Background_Experience.module.css';

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
              <span className={`badge bg-success border`}>&nbsp;</span>
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
                borderRadius: '0',
              }}
            >
              <div
                className="card-body
              "
              >
                <div className="float-end ">
                  <p className={style.date}>Aug. 2015 - Jun. 2022</p>
                </div>
                <h4 className="d-flex card-title text-dark align-items-center">
                  <img
                    src={images.baker_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong> Baker McKenzie</strong>
                </h4>
                <p className="card-text text-dark">
                  Labour & Employment local and international advise and
                  litigation.{' '}
                </p>
                <br />
                <p className="card-text text-dark">
                  Executive and massive terminations, companies start-ups and
                  shutdowns, local and international executive hires, employee
                  compensation and benefits, bargaining of individual and
                  collective employment agreements, labor relations and Trade
                  Union counseling, employment and social security.
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
              <span
                className={`badge border`}
                style={{
                  backgroundColor: '#2ECC71',
                }}
              >
                &nbsp;
              </span>
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
                borderRadius: '0',
              }}
            >
              <div
                className="card-body
              "
              >
                <div className="float-end">
                  <p className={style.date}>Aug. 2014 - Oct. 2015</p>
                </div>
                <h4 className="d-flex card-title text-dark align-items-center">
                  <img
                    src={images.viviendaDigna_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Vivienda Digna</strong>
                </h4>
                <p className="card-text text-dark">
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
              <span
                className={`badge border`}
                style={{
                  backgroundColor: '#2ECC71',
                }}
              >
                &nbsp;
              </span>
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
                borderRadius: '0',
              }}
            >
              <div className="card-body">
                <div className="float-end">
                  <p className={style.date}>Mar. 2015 - Aug. 2015</p>
                </div>
                <h4 className="d-flex card-title text-dark align-items-center">
                  <img
                    src={images.mansueti_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Mansueti Gallo & Sallette</strong>
                </h4>
                <p className="card-text text-dark">
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
              <span
                className={`badge border`}
                style={{
                  backgroundColor: '#2ECC71',
                }}
              >
                &nbsp;
              </span>
            </h5>
          </Col>
          <Col
            className={`
            py-2`}
          >
            <div
              className="card"
              style={{
                borderRadius: '0',
              }}
            >
              <div
                className="card-body
              "
              >
                <div className="float-end">
                  <p className={style.date}> Jul. 2008 - Mar. 2009</p>
                </div>
                <h4 className="d-flex card-title text-dark align-items-center">
                  <img
                    src={images.navarro_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Navarro Castex</strong>
                </h4>
                <p className="card-text text-dark">
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
