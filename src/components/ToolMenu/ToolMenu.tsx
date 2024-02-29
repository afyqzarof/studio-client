import { useState } from "react";
import "./ToolMenu.scss";
import WipBtn from "../WipBtn/WipBtn";
type ToolMenuProps = {
  title: string;
  list: any[];
  heightValue: string;
  className?: string;
  isWordTool?: boolean;
  handleWordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  chosenWord?: string;
};
const ToolMenu = ({
  title,
  list,
  heightValue,
  className,
  isWordTool,
  handleWordChange,
  chosenWord,
}: ToolMenuProps) => {
  const [isItemShown, setIsItemShown] = useState(false);

  const showItems = () => {
    setIsItemShown(!isItemShown);
  };
  return (
    <section className={className ? `tool ${className}` : "tool"}>
      <button
        className={
          isItemShown ? "tool__title tool__title--active" : "tool__title"
        }
        onClick={showItems}>
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
          <li>
            <input
              onChange={handleWordChange}
              name="word"
              className="tool__input"
              value={chosenWord}
              placeholder="enter word"
            />
          </li>
        )}
        {list.map((item) => {
          if (item.notWorking) {
            return (
              <li key={item.id}>
                <WipBtn name={item.name} />
              </li>
            );
          }
          return (
            <li key={item.id}>
              <button
                type="button"
                className="tool__item"
                onClick={item.onClick}>
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
