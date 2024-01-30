import SpotifyNode from "../components/SpotifyNode/SpotifyNode";
import YoutubeVidNode from "../components/YoutubeVidNode/YoutubeVidNode";
import TextNode from "../components/TextNode/TextNode";
import ColorSelectorNode from "../components/ColorSelectorNode/ColorSelectorNode";
import PinterestNode from "../components/PinterestNode/PinterestNode";
import ImageNode from "../components/ImageNode/ImageNode";

const useNodeTypes = () => {
  return {
    SpotifyNode,
    YoutubeVidNode,
    TextNode,
    ColorSelectorNode,
    PinterestNode,
    ImageNode,
  };
};
export default useNodeTypes;
