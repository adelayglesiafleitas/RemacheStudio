import "./CV.css";
import { Team } from "../../data/Team";
import close from "../../../assets/stuf/logos/close.png";
import facebook from "../../../assets/stuf/logos/LOGOS AMARILLOS/LOGOS AMARILLOS_00000.png";
import instagram from "../../../assets/stuf/logos/LOGOS AMARILLOS/LOGOS AMARILLOS_00002.png";
import linkedin from "../../../assets/stuf/logos/LOGOS AMARILLOS/LOGOS AMARILLOS_00003.png";
import youtube from "../../../assets/stuf/logos/LOGOS AMARILLOS/LOGOS AMARILLOS_00001.png";
import LazyLoad from "react-lazy-load";

function CV({ worker, setCV, cV }) {
  const handleClose = () => {
    setCV(false);
  };

  return (
    <section className="container_CV  ">
      <div className="container_CV_left animate__animated animate__bounceInLeft ">
        <h2 className=" encode_sans_condensed_bold  title_cv ">
          EQUIPO REMACHESTUDIO
        </h2>
        <LazyLoad>
          <img
            src={Team[worker].imagen}
            alt={`imagen de ${Team[worker].name}`}
          />
        </LazyLoad>
      </div>
      <div className="container_CV_rigth animate__animated animate__bounceInRight">
        <p className="container_CV_rigth_name  encode_sans_condensed_bold  ">
          {Team[worker].name}
        </p>
        {Team[worker].number != "no" ? (
          <p className="container_CV_rigth_number encode_sans_condensed_medium">
            {Team[worker].number}
          </p>
        ) : (
          ""
        )}
        {Team[worker].correo != "no" ? (
          <p className="container_CV_rigth_mail  encode_sans_condensed_medium">
            {Team[worker].correo}
          </p>
        ) : (
          ""
        )}
        {Team[worker].correo != "no" ? (
          <p className="container_CV_rigth_CV  encode_sans_condensed_medium">
            {Team[worker].cv}
          </p>
        ) : (
          ""
        )}

        <div className="container_web_button">
          {Team[worker].facebook != "no" ? (
            <a href={Team[worker].facebook}>
              <LazyLoad>
                <img src={facebook} alt="icono facebook" />
              </LazyLoad>
            </a>
          ) : (
            ""
          )}

          {Team[worker].instagram != "no" ? (
            <a href={Team[worker].instagram}>
              <LazyLoad>
                <img src={instagram} alt="icono instagram" />
              </LazyLoad>
            </a>
          ) : (
            ""
          )}

          {Team[worker].youtube != "no" ? (
            <a href={Team[worker].youtube}>
              <LazyLoad>
                <img src={youtube} alt="icono youtube" />
              </LazyLoad>
            </a>
          ) : (
            ""
          )}

          {Team[worker].linked != "no" ? (
            <a href={Team[worker].linked}>
              <LazyLoad>
                <img src={linkedin} alt="icono linkedin" />
              </LazyLoad>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default CV;
