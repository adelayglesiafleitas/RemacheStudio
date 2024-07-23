import "./Fotografia.css";
import { fotografia, baner } from "../../components/data/pages/Fotografia.js";
import { useEffect, useState } from "react";
import Gallery from "../tools/Gallery/Gallery.jsx";
import LazyLoad from "react-lazy-load";

function Fotografia() {
  const [visualGallery, setVisualGallery] = useState(false);
  const [fotosArray, setfotosArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndexGallery = (index) => {
    setVisualGallery(true);
    setfotosArray(fotografia[index].imgArray);
  };

  return (
    <main>
      {visualGallery ? (
        <Gallery setVisualGallery={setVisualGallery} fotosArray={fotosArray} />
      ) : (
        <>
          <div className="container_Fotografia_baner ">
            <div className="container_films_baner_BG">
              <h2 className="encode_sans_condensed_bold">{baner.title}</h2>
              <h3 className="encode_sans_condensed_medium">{baner.text}</h3>
            </div>
          </div>
          <div className="container_Fotografia">
            {fotografia.map((item, index) => (
              <div className="container_Fotografia_card " key={item.id}>
                <LazyLoad>
                  <img
                    src={item.image}
                    alt={`imagen de la pelicula ${item.name}`}
                    onClick={() => handleIndexGallery(index)}
                  />
                </LazyLoad>

                <div className="container_text_films">
                  <p className="encode_sans_condensed_bold film_title name_container">
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

export default Fotografia;
