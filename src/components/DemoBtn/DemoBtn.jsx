import "./DemoBtn.scss";

const DemoBtn = ({ className }) => {
  return (
    <button className={"tooltip " + className}>
      save
      <div className="tooltip__text">
        <p>please login to save :)</p>
      </div>
    </button>
  );
};

export default DemoBtn;
