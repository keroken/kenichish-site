import styles from './App.module.css'
import { Gallery } from './components/Gallery'
import { MainNav } from './components/MainNav/'

function App() {

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>KENICHI SHINAGAWA</h1>
      <MainNav />
      <Gallery />
    </div>
  )
}

export default App
