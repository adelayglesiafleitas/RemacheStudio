import "./CV.css";
import { Team } from "../../data/Team";
import close from "../../../assets/stuf/logos/close.png";
import facebook from "../../../assets/stuf/iconos/icons8-facebook.svg";
import instagram from "../../../assets/stuf/iconos/icons8-instagram.svg";
import linkedin from "../../../assets/stuf/iconos/icons8-linkedin.svg";
import youtube from "../../../assets/stuf/iconos/icons8-youtube.svg";
import LazyLoad from "react-lazy-load";

function CV({ worker, setCV }) {
  const handleClose = () => {
    setCV(false);
  };
  return (
    <section className="container_CV  ">
      <div className="container_CV_left animate__animated animate__bounceInLeft ">
        <h2 className=" encode_sans_condensed_bold  title_2 ">
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
        <p className="container_CV_rigth_number encode_sans_condensed_medium">
          {Team[worker].number}
        </p>
        <p className="container_CV_rigth_mail  encode_sans_condensed_medium">
          {Team[worker].correo}
        </p>
        <p className="container_CV_rigth_CV  encode_sans_condensed_medium">
          {Team[worker].cv}
        </p>

        <div className="container_web_button">
          <a href={Team[worker].facebook}>
            <LazyLoad>
              <img src={facebook} alt="icono facebook" />
            </LazyLoad>
          </a>
          <a href={Team[worker].instagram}>
            <LazyLoad>
              <img src={instagram} alt="icono instagram" />
            </LazyLoad>
          </a>
          <a href={Team[worker].youtube}>
            <LazyLoad>
              <img src={youtube} alt="icono youtube" />
            </LazyLoad>
          </a>
          <a href={Team[worker].linked}>
            <LazyLoad>
              <img src={linkedin} alt="icono linkedin" />
            </LazyLoad>
          </a>
        </div>
        <button className="container_CV_rigth_button" onClick={handleClose}>
          <LazyLoad>
            <img src={close} alt="imagen close" />
          </LazyLoad>
        </button>
      </div>
    </section>
  );
}

export default CV;
