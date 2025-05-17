import styles from './App.module.css'

function App() {

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>KENICHI SHINAGAWA</h1>
      <ul className={styles.mainNav}>
        <li>
          <a href="">Architecture</a>
        </li>
        <li>
          <a href="">Web/IOT</a>
        </li>
        <li>
          <a href="">Interactive</a>
        </li>
        <li>
          <a href="">Graphic</a>
        </li>
        <li>
          <a href="">Others</a>
        </li>
      </ul>
    </div>
  )
}

export default App
