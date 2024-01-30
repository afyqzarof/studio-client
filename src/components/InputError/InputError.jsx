import "./InputError.scss";

const InputError = ({ msg }) => {
  return (
    <div>
      <p className="error-msg">{msg}</p>
    </div>
  );
};

export default InputError;
