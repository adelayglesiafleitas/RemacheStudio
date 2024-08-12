import { useEffect, useState } from "react";
import {
  disenoGrafico,
  baner,
} from "../../components/data/pages/DisenoGrafico.js";
import Gallery from "../tools/Gallery/Gallery.jsx";
import "./DisenoGrafico.css";
import LazyLoad from "react-lazy-load";

function DisenoGrafico() {
  const [visualGallery, setVisualGallery] = useState(false);
  const [fotosArray, setfotosArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndexGallery = (index) => {
    setVisualGallery(true);
    setfotosArray(disenoGrafico[index].imgArray);
  };
  return (
    <main>
      {visualGallery ? (
        <Gallery setVisualGallery={setVisualGallery} fotosArray={fotosArray} />
      ) : (
        <>
          <div className="container_DisenoGrafico_baner ">
            <div className="container_films_baner_BG">
              <h2 className="encode_sans_condensed_bold">{baner.title}</h2>
              <h3 className="encode_sans_condensed_medium">{baner.text}</h3>
            </div>
          </div>

          <div className="container_films">
            {disenoGrafico.map((item, index) => (
              <div className="container_DisenoGrafico_card " key={item.id}>
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

export default DisenoGrafico;
