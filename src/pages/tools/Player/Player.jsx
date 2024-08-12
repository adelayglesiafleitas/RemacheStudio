import ReactPlayer from "react-player";
import close from "../../../assets/stuf/logos/close.png";
import { useEffect } from "react";
import "./Player.css";
import LazyLoad from "react-lazy-load";

function Player({ url, setDisplayPlayer }) {
  useEffect(() => {
    window.scrollTo(0, window.innerHeight / 2);
  }, []);
  const handleclick = () => {
    setDisplayPlayer(false);
  };
  return (
    <div className="play_bg_dark">
      <button onClick={handleclick}>
        <LazyLoad>
          <img className="close" src={close} alt="icono de back" />
        </LazyLoad>
      </button>
      <div className="container_player">
        <ReactPlayer url={url} controls playing height="100%" width="100%" />
      </div>
    </div>
  );
}

export default Player;
