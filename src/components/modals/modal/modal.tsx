import React, { FC } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './modal.module.css';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
}
export const Modal: FC<IModalProps> = ({ onClose, isOpen, children }) => {
  React.useEffect(() => {
    function closeByEsc(evt: any) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', closeByEsc);
    }
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [isOpen]);

  return (
    <ModalOverlay onClose={onClose}>
      <section className={`${ModalStyles.modal} pt-10 pr-10 pl-10 pb-15`}>
        <button onClick={onClose} className={ModalStyles.closeButton}><CloseIcon type="primary" /></button>
        {children}
      </section>
    </ModalOverlay>
  );
};
