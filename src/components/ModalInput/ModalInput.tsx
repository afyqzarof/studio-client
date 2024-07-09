import "./ModalInput.scss";
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
import { FormEvent, useState } from "react";
import Modal from "react-modal";

const ModalInput = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { addNodes } = useReactFlow();
  const handleCreateUrlPin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const url = formElement.url.value as string;
    if (!isUrlValid(url)) {
      // console.log("not valid url");

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
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="btn-container__btn" onClick={openModal}>
        add link
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}>
        <article className="modal bg-white p-4">
          <h2 className="modal__title">enter a url</h2>
          <p className="modal__paragraph">
            we currently support youtube, pinterest and spotify
          </p>
          <form
            className="url-form"
            onSubmit={(e) => {
              handleCreateUrlPin(e);
              closeModal();
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
      </Modal>
    </>
  );
};

export default ModalInput;
