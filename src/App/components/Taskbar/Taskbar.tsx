import Homebutton from './Homebutton/Homebutton';
import Roadbutton from './Roadbutton/Roadbutton';
import Settingsbutton from './Settingsbutton/Settingsbutton';
import styles from './Taskbar.module.css';

type TaskbarProps = {
  onSettings: () => void;
};

export default function Taskbar({ onSettings }: TaskbarProps): JSX.Element {
  return (
    <div className={styles.taskbar}>
      <Homebutton />
      <Roadbutton />
      <Settingsbutton onClickHandler={onSettings} />
    </div>
  );
}
