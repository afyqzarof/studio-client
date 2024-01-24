import "./UploadModal.scss";
import Popup from "reactjs-popup";

const ModalInput = () => {
  const handleCreateUploadPin = (e) => {
    e.preventDefault();
    console.log(e.target.files);
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
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

export default ModalInput;
