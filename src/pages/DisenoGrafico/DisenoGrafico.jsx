import { useEffect, useState } from "react";
import {
  disenoGrafico,
  baner,
} from "../../components/data/pages/disenoGrafico.js";
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
            <div className="container_DisenoGrafico_baner_BG">
              <h2 className="open_sans_600">{baner.title}</h2>
              <h3 className="open_sans_200">{baner.text}</h3>
            </div>
          </div>

          <div className="container_DisenoGrafico">
            {disenoGrafico.map((item, index) => (
              <div className="container_DisenoGrafico_card " key={item.id}>
                <LazyLoad>
                  <img
                    src={item.image}
                    alt={`imagen de la pelicula ${item.name}`}
                    onClick={() => handleIndexGallery(index)}
                  />
                </LazyLoad>

                <div className="container_text_DisenoGrafico">
                  <p className="open_sans_600">{item.name}</p>
                  <p className="open_sans_600">{item.text}</p>
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
