import { Team } from "../../data/Team";
import "./Team.css";
function Works({ setDropdownVisibleTeam }) {
  return (
    <ul
      className="container_nav_ul_team "
      onMouseEnter={() => setDropdownVisibleTeam(true)}
      onMouseLeave={() => setDropdownVisibleTeam(false)}
    >
      {Team.map((item, index) => (
        <li className="encode_sans_condensed_bold" key={item.id}>
          <a className="encode_sans_condensed_bold">{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Works;
