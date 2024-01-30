import "./ModalUpload.scss";
// import Popup from "reactjs-popup";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { nanoid } from "nanoid";
import getRandomCoords from "../../utils/get-random-coords";
import Modal from "react-modal";

const ModalUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [myFiles, setMyFiles] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  const { addNodes } = useReactFlow();
  const handleCreateUploadPin = async (e) => {
    e.preventDefault();

    const file = myFiles[0];
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(baseUrl + "/api/upload", formData);
    addNodes({
      id: nanoid(10),
      type: "ImageNode",
      position: getRandomCoords(),
      data: {
        file: data.filename,
      },
    });
    setMyFiles(null);
    closeModal();
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 500000,
  });
  const handleCancel = () => {
    setMyFiles(null);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={openModal} className="btn-container__btn">
        upload
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">
        <article className="upload">
          <form
            encType="multipart/form-data"
            className="file-form"
            onSubmit={(e) => {
              handleCreateUploadPin(e);
              close();
            }}>
            {/* <h2 className="upload__title">
              {!myFiles ? "upload a file" : "file preview"}
            </h2> */}
            {!myFiles ? (
              <>
                <div className="file-form__left">
                  <h2 className="upload__title">upload a file</h2>
                  <p className="file-form__info">
                    please make sure your files are .jgp, .jpeg <br /> or .png
                    and don't exceed 500KB
                  </p>
                </div>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} name="file" />
                  <p className="upload__dnd">
                    drag and drop some files here,
                    <br /> or click to select files
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="file-form__info-left">
                  <div>
                    <h2 className="upload__title">file preview</h2>
                    <p className="file-form__name">{myFiles[0].path}</p>
                  </div>
                  <div>
                    <button type="submit" className="file-form__btn">
                      create pin
                    </button>
                    <p onClick={handleCancel} className="upload__cancel">
                      cancel
                    </p>
                  </div>
                </div>
                <img src={myFiles[0].preview} className="file-form__preview" />
              </>
            )}
          </form>
        </article>
      </Modal>
    </>
  );
};

export default ModalUpload;
