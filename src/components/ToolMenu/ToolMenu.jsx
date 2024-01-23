import { useState } from "react";
import "./ToolMenu.scss";
import WipBtn from "../WipBtn/WipBtn";

const ToolMenu = ({
  title,
  list,
  heightValue,
  className,
  isWordTool,
  handleWordChange,
  chosenWord,
}) => {
  const [isItemShown, setIsItemShown] = useState(false);

  const showItems = () => {
    setIsItemShown(!isItemShown);
  };
  return (
    <section className={className ? `tool ${className}` : "tool"}>
      <button className={"tool__title"} onClick={showItems}>
        {title}
      </button>

      <ul
        className={
          isItemShown
            ? "tool__item-container tool__item-container--shown"
            : "tool__item-container"
        }
        style={isItemShown ? { height: heightValue } : { height: "0px" }}>
        {isWordTool && (
          <input
            onChange={handleWordChange}
            name="word"
            className="tool__input"
            value={chosenWord}
          />
        )}
        {list.map((item) => {
          if (item.notWorking) {
            return <WipBtn name={item.name} />;
          }
          return (
            <li key={item.id}>
              <button className="tool__item" onClick={item.onClick}>
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ToolMenu;
