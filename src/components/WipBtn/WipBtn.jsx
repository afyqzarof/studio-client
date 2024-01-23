import Popup from "reactjs-popup";

const WipBtn = ({ name }) => (
  <Popup
    trigger={(open) => (
      <button className="tool__item tool__item--cross-out">{name}</button>
    )}
    position="right center"
    closeOnDocumentClick
    on={["hover"]}>
    <div>
      <p> we are working on making lines available </p>
      <p>for our future versions :)</p>
    </div>
  </Popup>
);

export default WipBtn;
