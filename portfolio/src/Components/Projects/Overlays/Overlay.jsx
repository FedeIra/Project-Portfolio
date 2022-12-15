import React, { useState } from 'react';
import { Card, Button, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import style from './Overlay.module.css';
import { FaGlobe } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';
import ProjectKinema from '../Projects/ProjectKinema';
import ProjectGaming from '../Projects/ProjectGaming';

const Overlay = ({ name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTextProject = () => (
    <Tooltip id="button-tooltip" className={style.tooltip}>
      Want to see more pics?
    </Tooltip>
  );

  return (
    <Card.ImgOverlay className={style.card_overlay}>
      <Card.Header className={style.title}>{name}</Card.Header>
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 200, hide: 0 }}
          overlay={renderTextProject()}
        >
          <Button
            className={style.buttonOverlay}
            style={{
              borderRadius: '100%',
              border: '3px solid rgb(246, 246, 246)',
              fontSize: '18px',
              padding: '7%',
            }}
            onClick={handleShow}
          >
            Preview!
          </Button>
        </OverlayTrigger>
      </Card.Body>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        centered
        className={style.modal}
      >
        <Modal.Body
          className={style.modalBody}
          style={{
            border: '1px solid white',
            backgroundColor: 'black',
            borderBottom: '3px solid gray',
            padding: '0',
            margin: '0',
          }}
        >
          {name === 'Kinema' ? <ProjectKinema /> : <ProjectGaming />}
        </Modal.Body>
        <Modal.Header
          style={{
            padding: '3%',
            backgroundColor: 'white',
          }}
          closeButton
        >
          <Button
            variant="primary"
            onClick={handleClose}
            className={style.buttonCarousel}
            style={{
              borderRadius: '0',
              display: 'flex',
            }}
          >
            View Site
            <IconButton
              colorScheme="transparent"
              icon={<FaGlobe size="1rem" />}
            />
          </Button>
        </Modal.Header>
      </Modal>
    </Card.ImgOverlay>
  );
};

export default Overlay;
