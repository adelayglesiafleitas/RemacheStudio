import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import close from "../../../assets/stuf/logos/close.png";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

const Gallery = ({ setVisualGallery, fotosArray }) => {
  const handleclick = () => {
    setVisualGallery(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = fotosArray.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <>
      <div className="gallery">
        <ImageGallery items={images} />
        <button className="gallery_button" onClick={handleclick}>
          <LazyLoad>
            <img src={close} alt="icono de back" />
          </LazyLoad>
        </button>
      </div>
    </>
  );
};

export default Gallery;
