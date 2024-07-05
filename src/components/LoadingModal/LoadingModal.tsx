import Modal from "react-modal";
import studioLogo from "../../assets/logos/logo-small.svg"
type LoadingModalProps = {
  modalIsOpen: boolean;
};

const LoadingModal = ({ modalIsOpen }: LoadingModalProps) => {
  return (
    <Modal isOpen={modalIsOpen} ariaHideApp={false}>
      <article className=" overflow-visible">
        <img src={studioLogo} alt="studio" className="w-52 animate-bounce"/>
      </article>
    </Modal>
  );
};

export default LoadingModal;
