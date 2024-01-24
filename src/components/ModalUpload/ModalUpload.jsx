import "./ModalUpload.scss";
import Popup from "reactjs-popup";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const ModalUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleCreateUploadPin = async (e) => {
    e.preventDefault();
    const file = acceptedFiles[0];

    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(baseUrl + "/api/upload", formData);
    console.log(data);
  };
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 500000,
  });
  return (
    <Popup
      trigger={<button className="btn-container__btn">upload</button>}
      modal
      nested>
      {(close) => (
        <article className="modal">
          <h2 className="modal__title">Upload a file</h2>
          <form
            encType="multipart/form-data"
            className="file-form"
            onSubmit={(e) => {
              handleCreateUploadPin(e);
              close();
            }}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} name="file" />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>

            <p>{acceptedFiles.length === 0 ? "" : acceptedFiles[0].path}</p>
            {acceptedFiles.length === 0 || (
              <button type="submit" className="file-form__btn">
                create pin
              </button>
            )}
          </form>
        </article>
      )}
    </Popup>
  );
};

export default ModalUpload;
