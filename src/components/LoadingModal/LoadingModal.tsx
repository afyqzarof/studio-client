import Modal from "react-modal";
import Image from "next/image";
type LoadingModalProps = {
  modalIsOpen: boolean;
};

const LoadingModal = ({ modalIsOpen }: LoadingModalProps) => {
  return (
    <Modal isOpen={modalIsOpen} ariaHideApp={false}>
      <article className=" overflow-visible">
        <Image
          src="/logos/logo-small.svg"
          alt="studio"
          className="w-52 animate-bounce"
          width={100}
          height={100}
        />
      </article>
    </Modal>
  );
};

export default LoadingModal;
