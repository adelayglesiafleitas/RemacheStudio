import { Link } from "react-router-dom";
import {
  handleMouseEnter,
  handleMouseLeave,
  handlePos,
  handleDisplayBurger,
} from "../Tool/Tool.jsx";
import BurgerMenu from "../../../assets/stuf/iconos/burger-menu-svgrepo-com _whithe.svg";
import close_w from "../../../assets/stuf/logos/close_w.png";
import "./MenuBurger.css";
import Logo from "../../../assets/stuf/logos/REMACHEsudio LOGO Blanco.png";

function MenuBurger({ headerObject, displayBurger, setDisplayBurger }) {
  return (
    <>
      <div className="hamb_menu">
        <img className="hamb_menu_logo" src={Logo} alt="logo de remache" />
        <div>
          <img
            className="burger_img"
            style={{ display: displayBurger ? "block" : "none" }}
            src={BurgerMenu}
            alt="icono burger"
            onClick={() => handleDisplayBurger(setDisplayBurger)}
          />
          <img
            className="burger_img_close"
            style={{
              display: !displayBurger ? "block" : "none",
            }}
            src={close_w}
            alt="hamb_close"
            onClick={() => handleDisplayBurger(setDisplayBurger)}
          />
        </div>
      </div>
      <div className="menu_burger">
        <ul
          style={{
            display: !displayBurger ? "block" : "none",
          }}
        >
          {headerObject.map((item) => (
            <li key={item.id}>
              <Link
                className="encode_sans_condensed_medium a_white"
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
    </>
  );
}

export default MenuBurger;
