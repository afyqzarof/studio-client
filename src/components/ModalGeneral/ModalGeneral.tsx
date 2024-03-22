import Modal from "react-modal";
import "./ModalGeneral.scss";
type ModalGeneralProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  title: string;
};

const ModalGeneral = ({
  modalIsOpen,
  closeModal,
  title,
}: ModalGeneralProps) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <article className="general">
        <h2 className="general__title">{title}</h2>
        <div className="general__buttons">
          <button className="general__btn">cancel</button>
          <button className="general__btn general__btn--cta">delete</button>
        </div>
      </article>
    </Modal>
  );
};

export default ModalGeneral;
