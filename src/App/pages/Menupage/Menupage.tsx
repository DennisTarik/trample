import styles from './Menupage.module.css';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuCardSmall from '../../components/MenuCardSmall/MenuCardSmall';
import StatisticsSrc from '../../../assets/Statistics.svg';
import ProfileSrc from '../../../assets/Profile.jpg';
import HistorySrc from '../../../assets/History.svg';
import MilestoneSrc from '../../../assets/Milestone.svg';
import Taskbar from '../../components/Taskbar/Taskbar';

export default function Menupage(): JSX.Element {
  return (
    <div className={styles.primary}>
      <MenuCard
        text="Profile"
        imgSrc={ProfileSrc}
        href="#"
        alt="Profile picture"
      />
      <MenuCard
        text="Statistics"
        imgSrc={StatisticsSrc}
        href="#"
        alt="Statistics diagramm"
      />
      <div className={styles.secondary}>
        <MenuCardSmall
          text="History"
          imgSrc={HistorySrc}
          href="#"
          alt="History logo"
        />
        <MenuCardSmall
          text="Milestone"
          imgSrc={MilestoneSrc}
          href="#"
          alt="Milestone logo"
        />
      </div>
      <Taskbar />
    </div>
  );
}
