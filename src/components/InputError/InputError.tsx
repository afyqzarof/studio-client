import "./InputError.scss";
type InputErrorProps = {
  msg: string;
};
const InputError = ({ msg }: InputErrorProps) => {
  return (
    <div>
      <p className="error-msg">{msg}</p>
    </div>
  );
};

export default InputError;
