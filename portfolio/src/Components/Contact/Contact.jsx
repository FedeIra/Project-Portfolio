import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import { motion } from 'framer-motion';
import * as images from '../../Assets/home_images.js';
import Footer from '../Footer/Footer.jsx';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <motion.h2
              className={`text-center ${style.about_heading}`}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Contact me!
            </motion.h2>
          </Col>
        </Row>
        <section id="contact" className="full-height px-lg-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 pb-4" data-aos="fade-up">
                <h1>Interested in working together? Let's talk</h1>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                <form action="#" className="row g-lg-3 gy-3">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name=""
                      rows="4"
                      className="form-control"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="form-group col-12 d-grid">
                    <button type="submit" className="btn btn-brand">
                      Contact me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
