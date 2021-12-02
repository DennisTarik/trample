import Homebutton from './Homebutton/Homebutton';
import Roadbutton from './Roadbutton/Roadbutton';
import Settingsbutton from './Settingsbutton/Settingsbutton';
import styles from './Taskbar.module.css';

export default function Taskbar(): JSX.Element {
  return (
    <div className={styles.taskbar}>
      <Homebutton />
      <Roadbutton />
      <Settingsbutton />
    </div>
  );
}
