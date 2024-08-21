import ReactPlayer from "react-player";
import { useState } from "react";
import logo from "../../../assets/stuf/logos/REMACHEsudio LOGO Blanco.png";
import "./DemoMotionGraphics.css";

function DemoVFX() {
  const [isPlaying, setIsPlaying] = useState(false);
  const url = "https://www.youtube.com/watch?v=AI_pjg94l1c";

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <section id="DemoMG">
      <div
        className="container_DemoMotionGraphics"
        style={{ cursor: "pointer" }}
        onClick={handlePlay}
      >
        {!isPlaying && (
          <img src={logo} style={{ cursor: "pointer" }} onClick={handlePlay} />
        )}
        <ReactPlayer
          url={url}
          playing={isPlaying}
          controls={true}
          onPlay={handlePlay}
          width="100%"
          height="100%"
          style={{ display: isPlaying ? "block" : "none" }} // Esconde el player hasta que se inicie
        />
      </div>
    </section>
  );
}

export default DemoVFX;
