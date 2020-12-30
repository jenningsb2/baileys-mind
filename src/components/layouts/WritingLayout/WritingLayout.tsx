import { ToggleSwitch } from '@/components/Toggle/Toggle';
import styles from './WritingLayout.module.scss';

export const WritingLayout: React.FC = ({ children }) => {
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
