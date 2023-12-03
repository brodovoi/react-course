import './Info.css';
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component.</h1>
      <button className="my-button">Click me in the info component</button>
      <button className={styles.myOtherButton}>
        Button with local Css styles
      </button>
    </div>
  );
}

export default Info;
