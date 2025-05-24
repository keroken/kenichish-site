import styles from './App.module.css'
import { MainNav } from './components/MainNav/'

function App() {

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>KENICHI SHINAGAWA</h1>
      <MainNav />
    </div>
  )
}

export default App
