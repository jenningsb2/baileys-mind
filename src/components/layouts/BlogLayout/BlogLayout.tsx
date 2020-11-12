import styles from './BlogLayout.module.scss';

export const BlogLayout: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
