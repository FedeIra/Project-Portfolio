import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as images from '../../../../Assets/home_images';
import style from './Background_Education.module.css';

const Background_Education = () => {
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
                style={{
                  backgroundColor: 'rgba(4, 1, 19, 0.9)',
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>Feb. 2017 - Feb. 2020</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.university_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong> Pontifical Catholic University of Argentina</strong>
                </h4>

                <p className="card-text text-white">
                  Specialization in Labor & Employment Law.
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
                style={{
                  backgroundColor: 'rgba(4, 1, 19, 0.9)',
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>Mar. 2016 - Aug. 2016</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.university_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Pontifical Catholic University of Argentina</strong>
                </h4>
                <p className="card-text text-white">
                  Postgraduate Course in Labor & Employment Law.
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
            py-2`}
          >
            <div
              className="card"
              style={{
                borderRadius: '0',
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: 'rgba(4, 1, 19, 0.9)',
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>Mar. 2015 - Aug. 2015</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.university_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Pontifical Catholic University of Argentina</strong>
                </h4>
                <p className="card-text text-white">
                  Postgraduate Course in Legal counselling.
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
              <div
                className="card-body
              "
                style={{
                  backgroundColor: 'rgba(4, 1, 19, 0.9)',
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>2007 - 2014</p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.university_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Pontifical Catholic University of Argentina</strong>
                </h4>
                <p className="card-text text-white">Lawyer</p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Timeline item 4 */}
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
                style={{
                  backgroundColor: 'rgba(4, 1, 19, 0.9)',
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}>1994 - 2006</p>
                </div>
                <h4 className="d-flex card-title text-white">
                  <img
                    src={images.molinos_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Los Molinos</strong>
                </h4>
                <p className="card-text text-white">Bachelor.</p>
              </div>
            </div>
          </Col>
        </Row>
        {/* end time line */}
      </Container>
    </div>
  );
};

export default Background_Education;
