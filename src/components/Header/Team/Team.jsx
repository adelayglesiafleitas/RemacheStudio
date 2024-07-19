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
        <li key={item.id}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Works;
