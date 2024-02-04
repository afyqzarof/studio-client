import "./DemoBtn.scss";

const DemoBtn = ({ className, isUpload, name }) => {
  return (
    <div className={"tooltip " + className}>
      <p>{name}</p>
      <div
        className="tooltip__text"
        style={isUpload ? { left: 0, width: "14rem" } : { right: 0 }}>
        <p>please login to {name} :)</p>
      </div>
    </div>
  );
};

export default DemoBtn;
