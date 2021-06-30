import React from "react";
import ModalOverlayStyles from './ModalOverlay.module.css'
import ReactDOM from "react-dom";

const modalRoot = document.querySelector('#react-modals');

function ModalOverlay(props) {

  return ReactDOM.createPortal((
    <div onClick={props.onClose} className={ModalOverlayStyles.modalOverlay}>
      {props.children}
    </div>
  ), modalRoot) 
}

export default ModalOverlay;