import { useEffect, useState } from "react";
import { publicidad, baner } from "../../components/data/pages/Publicidad.js";
import Player from "../tools/Player/Player.jsx";
import LazyLoad from "react-lazy-load";
import "../Films/Films.css";
import "./Publicidad.css";

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
        <div className="container_films_baner_BG">
          <h2 className="encode_sans_condensed_bold">{baner.title}</h2>
          <h3 className="encode_sans_condensed_medium">{baner.text}</h3>
        </div>
      </div>
      {displayPlayer ? (
        <Player url={url} setDisplayPlayer={setDisplayPlayer} />
      ) : (
        <div className="container_films">
          {publicidad.map((item) => (
            <div className="container_film_card " key={item.id}>
              <LazyLoad>
                <img
                  src={item.image}
                  alt={`imagen de la pelicula ${item.name}`}
                  onClick={() => handleIndexPublicidad(item.url)}
                />
              </LazyLoad>

              <div className="container_text_films">
                <p className="encode_sans_condensed_bold film_title">
                  {item.name}
                </p>
                <p className=" encode_sans_condensed_medium film_dir">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Publicidad;
