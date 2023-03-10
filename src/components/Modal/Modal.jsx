import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }
  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { children } = this.props;
    const { closeModal } = this;
    return createPortal(
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal}>{children}</div>
        
      </div>,
      modalRoot
    );
  }
}
export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func.isRequired,
};
