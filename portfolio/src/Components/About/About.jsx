import React from 'react';
import * as images from '../../Assets/home_images';
import style from './About.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardAbout from './CardAbout.jsx';
import technologies from './technologies.json';

const About = () => {
  return (
    <Container fluid className={style.about}>
      <Row className={style.about__row}>
        <Col
          xs={12}
          md={6}
          className={`${style.about__col} ${style.about__col__left}`}
        >
          <img
            src={images.profile_picture}
            alt="profile-pic"
            className={`rounded-circle ${style.about__img}`}
            style={{ width: '20rem', height: '20rem' }}
          />
          <img
            src={images.technologies_picture}
            alt="technologies-pic"
            className={`fluid ${style.about__tech__img}`}
            style={{ width: '40rem', height: '20rem' }}
          />
        </Col>
        <Col xs={12} md={6} className={`style.about__col__right`}>
          <h2 className={`text-center ${style.about__heading}`}>
            Get to know me
          </h2>
          <br />
          <p>I am proactive and disciplined.</p>
          <br />
          <p>
            For the last 7 years I have dedicated my time in specializaing on
            employment law and advising local and foreign companies on such
            matters. This helped me further develop these qualities as well as
            aquiring new ones, such as an advance level of english, a
            client-oriented mindset, and the ability to solve problems, transmit
            knowledge and work cooperatively with others.
          </p>
          <br />
          <p>
            I decided to redirect all my efforts and skills to programming,
            which is my new found passion. Currently, I managed to overcome my
            first obstacle, concluding Henry Web Developer Bootcamp. This helped
            me aquire the following tools which will help me continue on with my
            studies:
          </p>
          <br />
          <div className={style.about__technologies}>
            {technologies.map((tech, index) => (
              <CardAbout key={index} name={tech.name} avatar={tech.avatar} />
            ))}
          </div>
          <br />
          <p>
            I am currently looking for a job as a Junior Web Developer, where I
            can continue to learn and grow as a professional.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
