import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface MainNavProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

export const MainNav = ({ menuOpen, setMenuOpen }: MainNavProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)"); 

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when switching from mobile to desktop
  if (!isMobile && menuOpen) {
    setMenuOpen(false);
  }

  return (
    <nav className={styles.mainNavContainer}>
      {isMobile && (
        <button
          className={styles.hamburger + (menuOpen ? ' ' + styles.open : '')}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={handleHamburgerClick}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
      )}
      {(menuOpen || !isMobile) && (
        <ul className={styles.mainNav + (isMobile ? " " + styles.mobileMenu : "") }>
          <li>
            <Link to="/architecture" onClick={() => setMenuOpen(false)}>Architecture</Link>
          </li>
          <li>
            <Link to="/web" onClick={() => setMenuOpen(false)}>Web/IOT</Link>
          </li>
          <li>
            <Link to="/interactive" onClick={() => setMenuOpen(false)}>Interactive</Link>
          </li>
          <li>
            <Link to="/graphic" onClick={() => setMenuOpen(false)}>Graphic</Link>
          </li>
          <li>
            <Link to="/others" onClick={() => setMenuOpen(false)}>Others</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

