import styles from './MainNav.module.css';

export const MainNav = () => {
  return (
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
  );
};
