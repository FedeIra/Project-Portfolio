import React from 'react';
import { Card, Button, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import style from './Overlay.module.css';
import Modals from '../Modals/Modal.jsx';

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

const Overlay = ({ name }) => {
  // const [modalShow, setModalShow] = React.useState(false);

  const renderTextProject = () => (
    <Tooltip id="button-tooltip" className={style.tooltip}>
      Want to see more pics?
    </Tooltip>
  );

  return (
    <Card.ImgOverlay>
      <Card.Header className={style.title}>{name}</Card.Header>
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 200, hide: 0 }}
          overlay={renderTextProject()}
        >
          <Button
            className={style.buttonOverlay}

            // onClick={() => setModalShow(true)}
          >
            VIEW MORE!
          </Button>
          {/* <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          /> */}
        </OverlayTrigger>
      </Card.Body>
    </Card.ImgOverlay>
  );
};

export default Overlay;
