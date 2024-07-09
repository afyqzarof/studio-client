import { useState } from "react";

const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return { openModal, closeModal, modalIsOpen };
};

export default useModal;
