import React from "react";
import ModalOverlayStyles from './ModalOverlay.module.css'
import ReactDOM from "react-dom";
import propTypes from 'prop-types';
const modalRoot = document.querySelector('#react-modals');

function ModalOverlay(props) {

  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      props.onClose()
    }
  }

  return ReactDOM.createPortal((
    <div onClick={handleOverlayClose} className={ModalOverlayStyles.modalOverlay}>
      {props.children}
    </div>
  ), modalRoot) 
}

ModalOverlay.propTypes = {
  onClose: propTypes.func.isRequired,
  children: propTypes.node.isRequired
}

export default ModalOverlay;