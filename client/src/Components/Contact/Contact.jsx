// Import external dependencies:
import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

// Import local dependencies:
import style from './Contact.module.css';
import { sendEmail } from '../../actions';

const Contact = () => {
  const dispatch = useDispatch();
  const emailToast = useToast();
  const form = useRef();

  const { loading, email, error } = useSelector((state) => state);

  useEffect(() => {
    if (loading) {
      emailToast({
        title: 'Loading.',
        description: 'Sending email...',
        status: 'info',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      });
    } else if (email) {
      emailToast({
        title: 'Email sent.',
        description: 'I appreciate your email and will respond soon.',
        status: 'success',
        duration: 3000,
        position: 'top-right',
        isClosable: true,
      });
    } else if (error) {
      emailToast({
        title: 'Error.',
        description: 'Error sending email. Please try again.',
        status: 'error',
        duration: 3000,
        position: 'top-right',
        isClosable: true,
      });
    }
  }, [loading, email, error, emailToast]);

  const boxVariants = {
    hidden: { opacity: 0, x: window.innerWidth < 768 ? -1000 : 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    await dispatch(sendEmail(formData));
    e.target.reset();
  };

  return (
    <div id="getInTouch" className={style.contact_container}>
      <motion.h2
        className={`text-center ${style.getInTouch_heading}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Get in touch
      </motion.h2>
      <Container>
        <section id="contact" className="full-height px-lg-5">
          <div className="container">
            <div
              className={`row justify-content-center text-center ${style.formContainer}`}
            >
              <h6 className={style.title}>
                Have a question or want to work together?
              </h6>
              <br />
              <br />
              <br />
              <br />
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  ref={form}
                  className="row g-lg-3 gy-3"
                >
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="user_name"
                      required
                      className={`form-control
                      form-control-lg ${style.form_container} `}
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      name="user_email"
                      required
                      className={`form-control
                      form-control-lg ${style.form_container}`}
                      placeholder="Enter email"
                      value="fedeirar@gmail.com"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="text"
                      name="subject"
                      required
                      className={`form-control
                      form-control-lg ${style.form_container}`}
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className={`form-control
                      form-control-lg ${style.form_container}`}
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="form-group col-12 d-grid">
                    <button
                      type="submit"
                      className={`btn btn-brand ${style.form_button}`}
                    >
                      Send Email
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
