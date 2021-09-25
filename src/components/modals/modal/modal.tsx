import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './modal.module.css';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

export const Modal = (props) => {
  React.useEffect(() => {
    function closeByEsc(evt) {
      if (evt.key === 'Escape') {
        props.onClose();
      }
    }

    if (props.isOpen) {
      document.addEventListener('keydown', closeByEsc);
    }
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [props.isOpen]);

  return (
    <ModalOverlay onClose={props.onClose}>
      <section className={`${ModalStyles.modal} pt-10 pr-10 pl-10 pb-15`}>
        <button onClick={props.onClose} className={ModalStyles.closeButton}><CloseIcon type="primary" /></button>
        {props.children}
      </section>
    </ModalOverlay>
  );
}
