import { useEffect, useState } from "react";
import {
  motiongGaphic,
  baner,
} from "../../components/data/pages/MotionGraphic.js";
import Player from "../tools/Player/Player.jsx";
import "./MotionGraphic.css";
import LazyLoad from "react-lazy-load";

function MotionGraphic() {
  const [url, setUrl] = useState("");
  const [displayPlayer, setDisplayPlayer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndexMotionGraphic = (url) => {
    setUrl(url);
    setDisplayPlayer(true);
  };
  return (
    <main>
      <div className="container_MotionGraphic_baner ">
        <div className="container_MotionGraphic_baner_BG">
          <h2 className="open_sans_600">{baner.title}</h2>
          <h3 className="open_sans_200">{baner.text}</h3>
        </div>
      </div>
      {displayPlayer ? (
        <Player url={url} setDisplayPlayer={setDisplayPlayer} />
      ) : (
        <div className="container_MotionGraphic">
          {motiongGaphic.map((item) => (
            <div className="container_MotionGraphic_card " key={item.id}>
              <LazyLoad>
                <img
                  src={item.image}
                  alt={`imagen de la pelicula ${item.name}`}
                  onClick={() => handleIndexMotionGraphic(item.url)}
                />
              </LazyLoad>

              <div className="container_text_MotionGraphic">
                <p className="open_sans_600">{item.name}</p>
                <p className="open_sans_600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default MotionGraphic;
