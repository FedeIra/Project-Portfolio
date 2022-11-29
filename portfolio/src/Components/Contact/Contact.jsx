import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import style from './Contact.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@chakra-ui/react';

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_32xnf3d',
        'template_ryfevxx',
        form.current,
        '_nvnYImGSQqlnQ5w1'
      )

      .then(
        (result) => {
          toast({
            title: 'Email sent.',
            description: 'I appreciate your email and will respond soon.',
            status: 'success',
            duration: 3000,
            position: 'top-center',
            isClosable: true,
          });
        },
        (error) => {
          toast({
            title: 'Error.',
            description:
              'Apologies. It seems we have encountered an error. Please try again.',
            status: 'error',
            duration: 3000,
            position: 'top-center',
            isClosable: true,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Container
        style={{
          height: '80vh',
          marginBottom: '1vh',
        }}
      >
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
            <div
              className={`row justify-content-center text-center ${style.formContainer}`}
            >
              <div className="col-lg-8 pb-4" data-aos="fade-up"></div>
              <h6 className={style.title}>
                Have a question or want to work together?
              </h6>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="row g-lg-3 gy-3"
                >
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="user_name"
                      required
                      className={`form-control
                      form-control-lg ${style.placeholder}`}
                      style={{
                        background: '#1a294e',
                        border: 'none',
                        color: 'white',
                        boxShadow: 'none',
                        borderRadius: '0',
                        borderBottom: '1px solid #b6cbce',
                      }}
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      name="user_email"
                      required
                      className={`form-control
                      form-control-lg ${style.placeholder}`}
                      style={{
                        background: '#1a294e',
                        border: 'none',
                        color: 'white',
                        boxShadow: 'none',
                        borderRadius: '0',
                        borderBottom: '1px solid #b6cbce',
                      }}
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="text"
                      name="subject"
                      required
                      className={`form-control
                      form-control-lg ${style.placeholder}`}
                      style={{
                        background: '#1a294e',
                        border: 'none',
                        color: 'white',
                        boxShadow: 'none',
                        borderRadius: '0',
                        borderBottom: '1px solid #b6cbce',
                      }}
                      placeholder="Enter subject..."
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      required
                      rows="4"
                      className={`form-control
                      form-control-lg ${style.placeholder}`}
                      style={{
                        background: '#1a294e',
                        border: 'none',
                        color: 'white',
                        boxShadow: 'none',
                        borderRadius: '0',
                        borderBottom: '1px solid #b6cbce',
                      }}
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                  <div className="form-group col-12 d-grid">
                    <button
                      type="submit"
                      className={`btn btn-brand`}
                      style={{
                        backgroundColor: '#1a294e',
                        color: 'white',
                        borderRadius: '0',
                        border: '3px solid #fefefe',
                        fontSize: '1.2rem',
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
