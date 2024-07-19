import { useState, useEffect } from "react";
import { adelante, atras, Us } from "../../../data/Carousel.js";
import "./Carousel.css";
import LazyLoad from "react-lazy-load";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // categoria1
  const [currentImg, setCurrentImg] = useState(0);
  const [urlImg, setUrlImg] = useState(Us[0].urlImagen[0]); //cambiar imagen

  /**para pasar de una categoria a otra button*/
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % Us.length;
    setCurrentIndex(nextIndex);
  };

  /**para pasar de una categoria a otra button*/
  const handleBack = () => {
    const nextIndex = currentIndex - 1 < 0 ? Us.length - 1 : currentIndex - 1; //valido si llega
    setCurrentIndex(nextIndex);
  };

  /**pasar imagenes*/
  const handleNextImage = () => {
    const nextIndex = (currentImg + 1) % Us[currentIndex].urlImagen.length;
    setUrlImg(Us[currentIndex].urlImagen[nextIndex]);
    setCurrentImg(nextIndex);
  };
  /**pasar imagenes autimatica*/
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImg]);

  const handleClipCarousel = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {
        /**render por categoria */
        <div className="container_carousel_cut">
          <LazyLoad>
            <img
              className=" imagen_fondo animate__animated animate__fadeIn" /*  <--por si hace falta para hacer transiciones*/
              src={urlImg}
              alt="imagen de muetra de trabajos"
            />
          </LazyLoad>
        </div>
      }
      <div className="container_us_texto">
        <h2 className="open_sans_600">{Us[currentIndex].titulo}</h2>
        <h3 className="open_sans_200">{Us[currentIndex].texto}</h3>
      </div>
      <div className="container_button_point">
        <button
          className="button_Back"
          onClick={() => {
            handleBack();
          }}
        >
          <LazyLoad>
            <img src={atras} alt="" />
          </LazyLoad>
        </button>
        <button
          className="button_Next "
          onClick={() => {
            handleNext();
          }}
        >
          <LazyLoad>
            <img src={adelante} alt="" />
          </LazyLoad>
        </button>
        <div className="list_images">
          {Us.map((item, index) => (
            <div key={item.id}>
              <button
                className={
                  index === currentIndex ? "index_whithe" : "index_shadow"
                }
                onClick={() => handleClipCarousel(index)}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
