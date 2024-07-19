import { useEffect, useState } from "react";
import { publicidad, baner } from "../../components/data/pages/Publicidad.js";
import Player from "../tools/Player/Player.jsx";
import "./Publicidad.css";
import LazyLoad from "react-lazy-load";

function Publicidad() {
  const [url, setUrl] = useState("");
  const [displayPlayer, setDisplayPlayer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndexPublicidad = (url) => {
    setUrl(url);
    setDisplayPlayer(true);
  };
  return (
    <main>
      <div className="container_publicidad_baner ">
        <div className="container_publicidad_baner_BG">
          <h2 className="open_sans_600">{baner.title}</h2>
          <h3 className="open_sans_200">{baner.text}</h3>
        </div>
      </div>
      {displayPlayer ? (
        <Player url={url} setDisplayPlayer={setDisplayPlayer} />
      ) : (
        <div className="container_publicidad">
          {publicidad.map((item) => (
            <div className="container_publicidad_card " key={item.id}>
              <LazyLoad>
                <img
                  src={item.image}
                  alt={`imagen de la pelicula ${item.name}`}
                  onClick={() => handleIndexPublicidad(item.url)}
                />
              </LazyLoad>

              <div className="container_text_publicidad">
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

export default Publicidad;
