// Import external dependencies:
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

// Import local dependencies:
import style from "./Contact.module.css";

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const boxVariants = {
    hidden: { opacity: 0, x: window.innerWidth < 768 ? -1000 : 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_32xnf3d",
        "template_ryfevxx",
        form.current,
        "irMjlZGiTzqJdGHet"
      );
      toast({
        title: "Email sent.",
        description: "I appreciate your email and will respond soon.",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error.",
        description:
          "Apologies. It seems we have encountered an error. Please try again.",
        status: "error",
        duration: 3000,
        position: "top-center",
        isClosable: true,
      });
    }
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
