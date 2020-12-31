import styles from './PrimaryLayout.module.scss';

export const PrimaryLayout: React.FC = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};
