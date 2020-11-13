import { MainLayout } from '../MainLayout/MainLayout';
import styles from './NoteLayout.module.scss';

export const NoteLayout: React.FC = ({ children }) => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
    </MainLayout>
  );
};
