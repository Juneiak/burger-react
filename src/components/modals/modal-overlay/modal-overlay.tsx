import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlayStyles from './modal-overlay.module.css';

const modalRoot: Element | null = document.querySelector('#react-modals');

interface IModalOverlay {
  onClose: () => void;
}
export const ModalOverlay: FC<IModalOverlay> = ({ children, onClose }) => {
  function handleOverlayClose(evt: any) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  if (!modalRoot) return null;

  return ReactDOM.createPortal((
    <div onClick={handleOverlayClose} className={ModalOverlayStyles.modalOverlay}>
      {children}
    </div>
  ), modalRoot);
};
