import "./Proyectos3d.css";
import "../Films/Films.css";
import Gallery from "../tools/Gallery/Gallery.jsx";
import { proyectos3d, baner } from "../../components/data/pages/Proyectos3d.js";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

function Proyectos3d() {
  const [visualGallery, setVisualGallery] = useState(false);
  const [fotosArray, setfotosArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndexGallery = (index) => {
    setVisualGallery(true);
    setfotosArray(proyectos3d[index].imgArray);
  };

  /*para posicionar la pagina en el inicio*/
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {visualGallery ? (
        <Gallery setVisualGallery={setVisualGallery} fotosArray={fotosArray} />
      ) : (
        <>
          <div className="container_proyectos3d_baner ">
            <div className="container_films_baner_BG">
              <h2 className="encode_sans_condensed_bold">{baner.title}</h2>
              <h3 className="encode_sans_condensed_medium">{baner.text}</h3>
            </div>
          </div>
          <div className="container_films">
            {proyectos3d.map((item, index) => (
              <div className="container_film_card " key={item.id}>
                <LazyLoad>
                  <img
                    src={item.image}
                    alt={`imagen de la pelicula ${item.name}`}
                    onClick={() => handleIndexGallery(index)}
                  />
                </LazyLoad>

                <div className="container_text_films">
                  <p className="encode_sans_condensed_bold film_title">
                    {item.name}
                  </p>
                  <p className="encode_sans_condensed_medium film_dir">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
export default Proyectos3d;
