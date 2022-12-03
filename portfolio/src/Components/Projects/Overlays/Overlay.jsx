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
              padding: '16px',
            }}
            onClick={handleShow}
          >
            VIEW MORE!
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
          style={{
            border: '1px solid white',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            backgroundColor: 'black',
            borderBottom: '3px solid gray',
          }}
        >
          {name === 'Kinema' ? <ProjectKinema /> : <ProjectGaming />}
        </Modal.Body>
        <Modal.Footer>
          <Modal.Header closeButton>
            <Button
              variant="primary"
              onClick={handleClose}
              style={{
                position: 'absolute',
                left: '4%',
                height: '2.5rem',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              View site
              <IconButton
                colorScheme="transparent"
                icon={<FaGlobe size="1rem" />}
              />
            </Button>
          </Modal.Header>
        </Modal.Footer>
      </Modal>
    </Card.ImgOverlay>
  );
};

export default Overlay;
