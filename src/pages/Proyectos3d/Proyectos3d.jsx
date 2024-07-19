import "./Proyectos3d.css";
import Player from "../tools/Player/Player.jsx";
import { proyectos3d, baner } from "../../components/data/pages/Proyectos3d.js";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

function Proyectos3d() {
  const [Url, setUrl] = useState("");
  const [displayPlayer, setDisplayPlayer] = useState(false);

  const hadlePlay = (url) => {
    setUrl(url);
    setDisplayPlayer(true);
  };

  /*para posicionar la pagina en el inicio*/
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="container_proyectos3d_baner ">
        <div className="container_proyectos3d_baner_BG">
          <h2 className="open_sans_600">{baner.title}</h2>
          <h3 className="open_sans_200">{baner.text}</h3>
        </div>
      </div>

      {displayPlayer ? (
        <Player url={Url} setDisplayPlayer={setDisplayPlayer} />
      ) : (
        <div className="container_proyectos3d">
          {proyectos3d.map((item) => (
            <div className="container_film_card " key={item.id}>
              <LazyLoad>
                <img
                  src={item.image}
                  alt={`imagen de la pelicula ${item.name}`}
                  onClick={() => hadlePlay(item.url)}
                />
              </LazyLoad>

              <div className="container_text_proyectos3d">
                <p className="open_sans_600">{item.name}</p>
                {item.dir.map((item, index) => (
                  <p className="open_sans_200" key={index}>
                    {item}
                  </p>
                ))}
                <p className="open_sans_200">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default Proyectos3d;
