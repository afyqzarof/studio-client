import "./ModalUpload.scss";
import useIsDemo from "../../hooks/useIsDemo";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { nanoid } from "nanoid";
import getRandomCoords from "../../utils/get-random-coords";
import Modal from "react-modal";
import DemoBtn from "../DemoBtn/DemoBtn";

const ModalUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [myFiles, setMyFiles] = useState<any>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const isDemo = useIsDemo();
  const [isFileBig, setIsFileBig] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length !== 0) {
        setIsFileBig(false);
        setMyFiles(
          acceptedFiles.map((file: MediaSource) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        return;
      }
      setIsFileBig(true);
    },
    [myFiles]
  );

  const { addNodes } = useReactFlow();
  const handleCreateUploadPin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const file = myFiles[0];

    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(baseUrl + "/upload", formData);
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
    setIsFileBig(false);
    setMyFiles(null);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsFileBig(false);
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={openModal} className="btn-container__btn">
        upload
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}>
        <article className="upload">
          <form
            encType="multipart/form-data"
            className="file-form"
            onSubmit={(e) => {
              handleCreateUploadPin(e);
              close();
            }}>
            {!myFiles ? (
              <>
                <div className="file-form__left">
                  <h2 className="upload__title">upload a file</h2>
                  <p className="file-form__info">
                    please make sure your file does not exceed 500kb. we support
                    .jpg, .png, .jpeg
                  </p>
                  <p className="file-form__info file-form__info--red">
                    {isFileBig && "file is too large"}
                  </p>
                </div>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} name="file" />
                  <p className="upload__dnd">
                    drag and drop or click to select files
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="file-form__info-left">
                  <div>
                    <h2 className="upload__title">file preview</h2>
                  </div>
                  <div>
                    <p onClick={handleCancel} className="upload__cancel">
                      cancel
                    </p>
                    {isDemo ? (
                      <DemoBtn
                        className="file-form__btn"
                        isUpload={true}
                        name="create pin"
                      />
                    ) : (
                      <button type="submit" className="file-form__btn">
                        create pin
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <img
                    alt={myFiles[0].path}
                    src={myFiles[0].preview}
                    className="file-form__preview"
                  />
                  <p className="file-form__name">{myFiles[0].path}</p>
                </div>
              </>
            )}
          </form>
        </article>
      </Modal>
    </>
  );
};

export default ModalUpload;
