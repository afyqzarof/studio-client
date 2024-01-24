import { useState } from "react";
import "./ModalUpload.scss";
import Popup from "reactjs-popup";
import axios from "axios";

const ModalUpload = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [file, setFile] = useState(null);

  const handleCreateUploadPin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(baseUrl + "/api/upload", formData);
    console.log(data);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
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
            <input type="file" name="file" onChange={handleFileChange} />

            <button type="submit" className="file-form__btn">
              create pin
            </button>
          </form>
        </article>
      )}
    </Popup>
  );
};

export default ModalUpload;
