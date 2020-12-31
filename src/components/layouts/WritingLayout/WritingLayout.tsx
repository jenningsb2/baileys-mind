import styles from './WritingLayout.module.scss';

export const WritingLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
