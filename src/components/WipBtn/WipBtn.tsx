import Popup from "reactjs-popup";
type WipBtnProps = {
  name: string;
};
const WipBtn = ({ name }: WipBtnProps) => (
  <Popup
    trigger={() => (
      <button type="button" className="tool__item tool__item--cross-out">
        {name}
      </button>
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
