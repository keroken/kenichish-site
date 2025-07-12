import styles from './App.module.css'
import { Gallery } from './components/Gallery'
import { MainNav } from './components/MainNav/'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} onClick={() => window.location.href = '/'}>KENICHI SHINAGAWA</h1>
        </div>
        <MainNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <Gallery menuOpen={menuOpen} />
    </div>
  )
}

export default App
