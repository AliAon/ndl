import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelForm from './ModelForm';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h2 className='section__title-first text-center'>NDL</h2>
        <ModelForm fare={props.fare} bookeddata={props.bookeddata} onsetModalShow={props.onModalShow}/>
      </Modal.Body>
    </Modal>
  );
}


export default MyVerticallyCenteredModal