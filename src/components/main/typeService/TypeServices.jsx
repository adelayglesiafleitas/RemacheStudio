import { services } from "../../data/Services.js";
import close from "../../../assets/stuf/logos/close.png";
import "./TypeServices.css";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

function TypeServices({ setService, serviceSelect }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    setService(false);
  };
  return (
    <section className="container_type_services">
      <div className="container_type_services_left animate__animated animate__bounceInLeft">
        <LazyLoad>
          <img
            src={services[serviceSelect].image}
            alt={`imagen de ${services[serviceSelect].title}`}
          />
        </LazyLoad>
      </div>
      <div className="container_type_services_rigth animate__animated animate__bounceInRight">
        <p className="container_type_services_rigth_title">
          {services[serviceSelect].name}
        </p>
        <p className="container_type_services_rigth_text">
          {services[serviceSelect].text2}
        </p>
        <button
          className="container_type_services_rigth_button"
          onClick={handleClose}
        >
          <LazyLoad>
            <img src={close} alt="imagen close" />
          </LazyLoad>
        </button>
      </div>
    </section>
  );
}

export default TypeServices;
