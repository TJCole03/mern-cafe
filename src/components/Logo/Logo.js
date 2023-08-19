import styles from './Logo.module.scss';

export default function Logo() {
  return (
  <>
  <div className={styles.Logo}>
  <img src='/img/z-k.png' width="100" height="100" />
  </div>
    <div className={styles.badum}>"Ba dum. Tss!"</div>   
  </>   
);
}