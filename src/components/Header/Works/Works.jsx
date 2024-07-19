import "./Works.css";
import { Link } from "react-router-dom";
import { datos } from "../../data/Works";
function Works({ setDropdownVisibleWork }) {
  return (
    <ul
      className="container_nav_ul_Works "
      onMouseEnter={() => setDropdownVisibleWork(true)}
      onMouseLeave={() => setDropdownVisibleWork(false)}
    >
      {datos.map((item) => (
        <li key={item.id}>
          <Link to={`${item.to}`}>{item.type}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Works;
