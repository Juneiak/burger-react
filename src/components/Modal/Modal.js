import React from "react";
import ModalStyles from './Modal.module.css'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {

  React.useEffect(() => {
    function closeByEsc(evt) {
      if (evt.key === 'Escape') {
        props.onClose()
      }
    }

    if (props.isOpen) {
      document.addEventListener('keydown', closeByEsc)
    }
    return () => {
      document.removeEventListener('keydown', closeByEsc)
    }
  })


  return (
    <ModalOverlay onClose={props.onClose}>
      <section className={`${ModalStyles.modal} pt-10 pr-10 pl-10 pb-15`}>
        <button className={ModalStyles.closeButton}><CloseIcon type="primary" /></button>
        
        {props.children}
      </section>
    </ModalOverlay>
  )
}

export default Modal;