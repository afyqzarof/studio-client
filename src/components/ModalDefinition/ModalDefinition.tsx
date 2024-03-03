import "./ModalDefinition.scss";
import Modal from "react-modal";

const ModalDefinition = ({
  modalIsOpen,
  closeModal,
  definitions,
  chosenWord,
}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <article className="def">
        <h2 className="def__word">{chosenWord}</h2>
        {definitions.map((word, index) => (
          <div className="def__wrapper">
            <h3 key={index} className="def__subtitle">
              {word.partOfSpeech}
            </h3>
            <ul>
              {word.definitions.map((definition, index) => (
                <li className="def__meaning" key={index}>
                  {definition}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </Modal>
  );
};

export default ModalDefinition;
