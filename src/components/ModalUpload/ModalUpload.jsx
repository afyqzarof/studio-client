import "./ModalUpload.scss";
import Popup from "reactjs-popup";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";

const ModalUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [myFiles, setMyFiles] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
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

  const handleCreateUploadPin = async (e) => {
    e.preventDefault();

    const file = myFiles[0];
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(baseUrl + "/api/upload", formData);
    console.log(data);
    setMyFiles(null);
  };
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 500000,
    onDrop,
  });
  const handleCancel = () => {
    setMyFiles(null);
  };
  return (
    <Popup
      trigger={<button className="btn-container__btn">upload</button>}
      modal
      nested>
      {(close) => (
        <article className="upload">
          <h2 className="upload__title">
            {!myFiles ? "upload a file" : "file preview"}
          </h2>
          <form
            encType="multipart/form-data"
            className="file-form"
            onSubmit={(e) => {
              handleCreateUploadPin(e);
              close();
            }}>
            {!myFiles ? (
              <>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} name="file" />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>

                <p className="file-form__info">
                  please make sure your files are .jgp, .jpeg or .png and don't
                  exceed 500KB
                </p>
              </>
            ) : (
              <>
                <img src={myFiles[0].preview} className="file-form__preview" />
                <p className="file-form__name">{myFiles[0].path}</p>

                <button type="submit" className="file-form__btn">
                  create pin
                </button>
              </>
            )}
          </form>
          {myFiles && (
            <button onClick={handleCancel} className="upload__cancel">
              Cancel
            </button>
          )}
        </article>
      )}
    </Popup>
  );
};

export default ModalUpload;
