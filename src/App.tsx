import styles from './App.module.css'
import { Gallery } from './components/Gallery'
import { MainNav } from './components/MainNav/'

function App() {

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>KENICHI SHINAGAWA</h1>
        </div>
        <MainNav />
      </header>
      <Gallery />
    </div>
  )
}

export default App
