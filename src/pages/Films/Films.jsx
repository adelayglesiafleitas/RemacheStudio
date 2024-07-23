import "./Films.css";
import Player from "../tools/Player/Player.jsx";
import { films, baner } from "../../components/data/pages/Films.js";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

function Films() {
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
      <div className="container_films_baner ">
        <div className="container_films_baner_BG">
          <h2 className="encode_sans_condensed_bold">{baner.title}</h2>
          <h3 className="encode_sans_condensed_medium">{baner.text}</h3>
        </div>
      </div>

      {displayPlayer ? (
        <Player url={Url} setDisplayPlayer={setDisplayPlayer} />
      ) : (
        <div className="container_films">
          {films.map((item) => (
            <div className="container_film_card " key={item.id}>
              <LazyLoad>
                <img
                  src={item.image}
                  alt={`imagen de la pelicula ${item.name}`}
                  onClick={() => hadlePlay(item.url)}
                />
              </LazyLoad>

              <div className="container_text_films">
                <p className="encode_sans_condensed_bold film_title">
                  {item.name}
                </p>
                {item.dir.map((item, index) => (
                  <p className=" encode_sans_condensed_medium film_dir" key={index}>
                    {item}
                  </p>
                ))}
                <p className="encode_sans_condensed_medium film_dir">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default Films;
