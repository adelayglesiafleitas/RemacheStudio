import "./Header.css";
import { useState } from "react";
import { headerObject } from "../data/ObjetHeader";
import MenuBurger from "./MenuBurger/MenuBurger.jsx";
import HeaderNormal from "./HeaderNormal/HeaderNormal.jsx";

function Header() {
  const [displayBurger, setDisplayBurger] = useState(true);
  return (
    <header>
      <HeaderNormal
        displayBurger={displayBurger}
        setDisplayBurger={setDisplayBurger}
      />

      <MenuBurger
        headerObject={headerObject}
        setDisplayBurger={setDisplayBurger}
        displayBurger={displayBurger}
      />
    </header>
  );
}

export default Header;
