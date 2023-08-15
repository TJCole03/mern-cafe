import styles from './Logo.module.scss';

export default function Logo() {
  return (
  <>
  <div className={styles.Logo}>
    <div>Drums</div>
    <div>  & </div>
    <div>Hardware</div>
  </div>
    <div className={styles.badum}>"Ba dum. Tss!"</div>   
  </>   
);
}