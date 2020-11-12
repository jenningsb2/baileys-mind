import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav>navigation</nav>
      <div className={styles.content}>{children}</div>
      <footer>footer</footer>
    </div>
  );
};
