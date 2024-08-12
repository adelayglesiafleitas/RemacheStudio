import { services } from "../../data/Services.js";
import "./Services.css";
import LazyLoad from "react-lazy-load";
function Services({ setService, setServiceSelect }) {
  const handleService = (index) => {
    setService(true);
    setServiceSelect(index);
  };
  return (
    <section className="container_services " id="Servicios">
      <p className="encode_sans_condensed_bold services_title animate__animated animate__bounceIn container_services_title">
        Servicios
      </p>
      <div className="container_services_cards ">
        {services.map((item, index) => (
          <div
            key={item.id}
            className="container_service_card animate__animated animate__flipInX"
          >
            <LazyLoad>
              <img
                src={item.icon}
                alt={`imagen de ${item.name}`}
                onClick={() => handleService(index)}
              />
            </LazyLoad>
            <div className="container_services_text">
              <p className="encode_sans_condensed_bold services_name">
                {item.name}
              </p>
              <p className="encode_sans_condensed_medium services_text">
                {item.text1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
