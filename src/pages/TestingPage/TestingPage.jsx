import "./TestingPage.scss";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import Popup from "reactjs-popup";
import Modal from "react-modal";
const TestingPage = () => {
  const [myFiles, setMyFiles] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("drop");
      setMyFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [myFiles]
  );
  const { getRootProps, getInputProps } = useDropzone({
    noDragEventsBubbling: true,
    onDrop,
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    // <Popup
    //   trigger={<button className="btn-container__btn">upload</button>}
    //   modal
    //   nested>
    //   <section className="container">
    //     <div {...getRootProps({ className: "dropzone" })}>
    //       <input {...getInputProps()} />
    //       <p>Drag 'n' drop some files here, or click to select files</p>
    //     </div>
    //     <aside>
    //       <h4>Files</h4>
    //     </aside>
    //     <button
    //       onClick={() => {
    //         console.log(myFiles);
    //       }}>
    //       click
    //     </button>
    //   </section>
    // </Popup>
    <div>
      <button onClick={openModal} className="btn-container__btn">
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
          </aside>
          <button
            onClick={() => {
              console.log(myFiles);
            }}>
            click
          </button>
        </section>
      </Modal>
    </div>
  );
};

export default TestingPage;
