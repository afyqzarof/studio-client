import "./ModalInput.scss";
import Popup from "reactjs-popup";
import {
  getDomain,
  getYoutubeId,
  getYoutuId,
  isUrlValid,
  getSpotifyId,
  getPinterestId,
} from "../../utils/get-domain";
import { useReactFlow } from "reactflow";
import { nanoid } from "nanoid";
import getRandomCoords from "../../utils/get-random-coords";

const ModalInput = () => {
  const { addNodes } = useReactFlow();
  const handleCreateUrlPin = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    if (!isUrlValid(url)) {
      console.log("not valid url");

      return;
    }
    const domain = getDomain(url);
    if (domain === "youtube") {
      const youtubeId = getYoutubeId(url);
      addNodes({
        id: nanoid(10),
        type: "YoutubeVidNode",
        position: getRandomCoords(),
        data: {
          youtube_id: youtubeId,
        },
      });
      return;
    }
    if (domain === "youtu") {
      const youtuId = getYoutuId(url);
      addNodes({
        id: nanoid(10),
        type: "YoutubeVidNode",
        position: getRandomCoords(),
        data: {
          youtube_id: youtuId,
        },
      });
    }
    if (domain === "spotify") {
      const trackId = getSpotifyId(url);
      addNodes({
        id: nanoid(10),
        type: "SpotifyNode",
        position: getRandomCoords(),
        data: {
          track_id: trackId,
        },
      });
      return;
    }
    if (domain === "pinterest") {
      const pinterestId = getPinterestId(url);
      addNodes({
        id: nanoid(10),
        type: "PinterestNode",
        position: getRandomCoords(),
        data: {
          id: pinterestId,
        },
        style: {
          width: 400,
          height: 600,
        },
      });
    }
  };
  return (
    <Popup
      trigger={<button className="btn-container__btn">add link</button>}
      modal
      nested>
      {(close) => (
        <article className="modal">
          <h2 className="modal__title">enter a url</h2>
          <form
            className="url-form"
            onSubmit={(e) => {
              handleCreateUrlPin(e);
              close();
            }}>
            <input
              type="text"
              name="url"
              id="url"
              className="url-form__input"
            />
            <button type="submit" className="url-form__btn">
              create pin
            </button>
          </form>
        </article>
      )}
    </Popup>
  );
};

export default ModalInput;
