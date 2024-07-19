import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { headerObject } from "../data/ObjetHeader";
import Works from "./Works/Works.jsx";
import Team from "./Team/Team.jsx";
import Logo from "../../assets/stuf/logos/REMACHEsudio LOGO Blanco.png";
import LazyLoad from "react-lazy-load";

function Header() {
  const [isDropdownVisibleWork, setDropdownVisibleWork] = useState(false);
  const [isDropdownVisibleTeam, setDropdownVisibleTeam] = useState(false);
  const [itemType, setItemType] = useState("");

  /**********para gestinar el nav salga team y works**********/
  const handleMouseEnterWorks = (item) => {
    setItemType(item);
    setDropdownVisibleWork(true);
  };
  const handleMouseEnterTeams = (item) => {
    setItemType(item);
    setDropdownVisibleTeam(true);
  };

  const handleMouseEnter = (item) => {
    if (item == "Equipo") {
      handleMouseEnterTeams(item);
    } else if (item == "Trabajos") {
      handleMouseEnterWorks(item);
    }
  };

  const handleMouseLeave = () => {
    setItemType("");
    itemType == "Equipo" ? setDropdownVisibleTeam(false) : "";
    itemType == "Trabajos" ? setDropdownVisibleWork(false) : "";
  };
  /***********para gestinar el nav salga team y works************/

  /********pocisiona el scoll sin q sea por el url ************/
  const handlePos = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  /**********erruta sin q salga en el url ************/

  return (
    <header>
      <div className="container_header">
        <div className="container_logo">
          <LazyLoad>
            <img src={Logo} alt="logo_Remache" />
          </LazyLoad>
        </div>
        <nav>
          <div className="menu">
            <ul>
              {headerObject.map((item) => (
                <li className="shadowText " key={item.id}>
                  <Link
                    to={`${item.to}`}
                    className="open_sans_400"
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

        {/**submenu del nav */
        /*isDropdownVisibleWork ? (
          <Works setDropdownVisibleWork={setDropdownVisibleWork} />
        ) : (
          ""
        )*/}

        {/**submenu del nav */
        /*isDropdownVisibleTeam ? (
          <Team setDropdownVisibleTeam={setDropdownVisibleTeam} />
        ) : (
          ""
        )*/}
      </div>
    </header>
  );
}

export default Header;
