import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

export const MainNav = () => {
  return (
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <Link to="/architecture">Architecture</Link>
        </li>
        <li>
          <Link to="/web">Web/IOT</Link>
        </li>
        <li>
          <Link to="/interactive">Interactive</Link>
        </li>
        <li>
          <Link to="/graphic">Graphic</Link>
        </li>
        <li>
          <Link to="/others">Others</Link>
        </li>
      </ul>
    </nav>
  );
};
