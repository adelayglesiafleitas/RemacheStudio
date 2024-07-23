import "./Footer.css";
import Logo from "../../assets/stuf/logos/Remache_logo_negro.png";
import facebook from "../../assets/stuf/iconos/icons8-facebook.svg";
import { Facebook, Youtube, Instagram, Linkedin } from "./Logo";
import LazyLoad from "react-lazy-load";

function Footer() {
  return (
    <footer className="container_footer" id="Contactos">
      <section className="container_contactos">
        <div className="container_info_1">
          <LazyLoad>
            <img src={Logo} alt="imagen del logo de remache" />
          </LazyLoad>
          <p className="encode_sans_condensed_bold">Imagen VIdeo Post 3D</p>
        </div>
        <div className=" container_info_2">
          <p className="encode_sans_condensed_bold">
            remachestudio2009@gmail.com
          </p>
          <p className="encode_sans_condensed_bold">+53 5344 7436</p>
        </div>
      </section>
      <section className="container_contac">
        <div className="container_web_button">
          <a href="">
            <LazyLoad>
              <img src={Facebook} alt="icon de Facebook" />
            </LazyLoad>
          </a>
          <a href="">
            <LazyLoad>
              <img src={Instagram} alt="icon de Instagram" />
            </LazyLoad>
          </a>
          <a href="">
            <LazyLoad>
              <img src={Youtube} alt="icon de Youtube" />
            </LazyLoad>
          </a>
          <a href="">
            <LazyLoad>
              <img src={Linkedin} alt="icon de Linkedin" />
            </LazyLoad>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
