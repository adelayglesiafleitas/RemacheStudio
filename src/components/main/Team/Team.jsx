import { Team } from "../../data/Team.js";
import { useEffect } from "react";
import "./Team.css";
import LazyLoad from "react-lazy-load";
function Crew({ cV, setCV, setWorker }) {
  const handleSetCv = (index) => {
    setCV(true); // Show the CV
    window.scrollTo(0, 0); // Scroll to the top of the page
    setWorker(index); // Set the active worker by index
  };

  return (
    <section className="container_crew " id="Equipo">
      <div className="container_title">
        <h2 className="encode_sans_condensed_bold title_2">
          EQUIPO REMACHESTUDIO
        </h2>
      </div>
      <div className="container_listTeam">
        {Team.map((item, index) => (
          <div
            className="container_info animate__animated animate__backInRight"
            key={item.id}
          >
            <div className="container_img ">
              <LazyLoad>
                <img
                  className="img_worker "
                  src={item.imagen}
                  alt={`foto del trabajador${item.name}`}
                  onClick={() => handleSetCv(index)}
                />
              </LazyLoad>
            </div>
            <div className="team_container_text">
              <h3 className="encode_sans_condensed_bold title_3">
                {item.name}
              </h3>
              <h4 className="encode_sans_condensed_medium ">{item.position}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crew;
