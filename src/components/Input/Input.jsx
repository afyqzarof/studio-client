import "./Input.scss";

const Input = ({ name, label, placeholder, className }) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={name} className="input-container__label">
        {label}
      </label>
      <input
        className="input-container__input"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
