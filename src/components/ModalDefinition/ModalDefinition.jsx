import "./ModalDefinition.scss";
import Modal from "react-modal";

const ModalDefinition = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <h1>this is a modal</h1>
    </Modal>
  );
};

export default ModalDefinition;
