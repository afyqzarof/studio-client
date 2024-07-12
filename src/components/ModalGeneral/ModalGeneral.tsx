import Modal from "react-modal";
import "./ModalGeneral.scss";
type ModalGeneralProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  title: string;
  onClick?: () => void;
};

const ModalGeneral = ({
  modalIsOpen,
  closeModal,
  title,
  onClick,
}: ModalGeneralProps) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <article className="general bg-white p-4">
        <h2 className="general__title">{title}</h2>
        <div className="general__buttons">
          <button className="general__btn" onClick={closeModal}>
            cancel
          </button>
          <button className="general__btn general__btn--cta" onClick={onClick}>
            delete
          </button>
        </div>
      </article>
    </Modal>
  );
};

export default ModalGeneral;
