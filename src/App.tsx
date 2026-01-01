import styles from './App.module.css';
import { Gallery } from './components/Gallery';
import { MainNav } from './components/MainNav/';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTitleClick();
    }
  };

  return (
    <div className={styles.root}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1
            className={styles.title}
            onClick={handleTitleClick}
            onKeyDown={handleTitleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Go to home page"
          >
            KENICHI SHINAGAWA
          </h1>
        </div>
        <MainNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <div id="main-content" tabIndex={-1}>
        <Gallery menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default App;
