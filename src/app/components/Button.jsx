import styles from './styles/Button.module.css';

export default function Button({ children, onClickFun }) {
  return (
    <button className={styles.button} onClick={onClickFun}>
      {children}
    </button>
  );
}
