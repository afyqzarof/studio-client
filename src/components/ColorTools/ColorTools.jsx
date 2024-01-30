import useColorTools from "../../hooks/useColorTools";
import ToolMenu from "../ToolMenu/ToolMenu";

const ColorTools = () => {
  const { isColorSelected, colorTools } = useColorTools();
  return (
    <ToolMenu
      className={isColorSelected ? "" : "tool--hidden"}
      title="on color"
      list={colorTools}
      heightValue="6rem"
    />
  );
};

export default ColorTools;
