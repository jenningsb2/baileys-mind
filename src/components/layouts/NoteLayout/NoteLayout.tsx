import { ToggleSwitch } from '@/components/Toggle/Toggle';
import styles from './NoteLayout.module.scss';

export const NoteLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <ToggleSwitch />
        </div>
        {children}
      </div>
    </div>
  );
};
