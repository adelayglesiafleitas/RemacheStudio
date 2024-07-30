import {
  handleMouseEnter,
  handleMouseLeave,
  handlePos,
} from "../Tool/Tool.jsx";
import { headerObject } from "../../data/ObjetHeader";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Logo from "../../../assets/stuf/logos/REMACHEsudio LOGO Blanco.png";
import LogoResponsive from "../../../assets/stuf/logos/REMACHEsudio LOGO_resposive.png";

function HeaderNormal({ displayBurger, setDisplayBurger }) {
  return (
    <div className="container_header">
      <div className="container_logo">
        <div
          style={{
            transform: !displayBurger
              ? "translateX(-33px)"
              : "translateX(-7px)",
          }}
          className="container_logo"
        >
          <LazyLoad>
            <img src={Logo} alt="logo_Remache" />
          </LazyLoad>
        </div>
        <nav>
          <div className="menu">
            <ul>
              {headerObject.map((item) => (
                <li key={item.id}>
                  <Link
                    className="encode_sans_condensed_medium"
                    to={`${item.to}`}
                    onClick={() => handlePos(item.type)}
                    onMouseEnter={() => handleMouseEnter(item.type)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNormal;
