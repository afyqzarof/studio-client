import { toPng } from "html-to-image";
import { getViewportForBounds, getNodesBounds, useReactFlow } from "reactflow";
import axios from "axios";

const useHandleThumbnail = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { getNodes } = useReactFlow();
  const postThumbnail = async (dataUrl) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const thumbnailFile = new File([u8arr], "thumbnail.jpg", { type: mime });
    console.log(thumbnailFile);
    const formData = new FormData();
    formData.append("file", thumbnailFile);
    const { data } = await axios.post(baseUrl + "/upload/thumbnail", formData);
    return data;
  };
  const imageWidth = 1024;
  const imageHeight = 768;
  const handleThumbnail = async () => {
    const nodesBounds = getNodesBounds(getNodes());
    const transform = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    const pngFile = await toPng(
      document.querySelector(".react-flow__viewport"),
      {
        backgroundColor: "#fff",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: imageWidth,
          height: imageHeight,
          transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
        },
      }
    );
    const response = postThumbnail(pngFile);
    return response;
  };

  return { handleThumbnail };
};

export default useHandleThumbnail;
