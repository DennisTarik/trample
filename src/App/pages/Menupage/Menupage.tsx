import styles from './Menupage.module.css';
import MenuCard from '../../components/MenuCard/MenuCard';
import StatisticsSrc from '../../../assets/Statistics.svg';
import ProfileSrc from '../../../assets/Profile.jpg';
import HistorySrc from '../../../assets/History.svg';
import MilestoneSrc from '../../../assets/Milestone.svg';

export default function Menupage(): JSX.Element {
  return (
    <>
      <div className={styles.page}>
        <MenuCard
          text="Profile"
          imgSrc={ProfileSrc}
          href="#"
          alt="Profile picture"
          size="big"
        />
        <MenuCard
          text="Statistics"
          imgSrc={StatisticsSrc}
          href="#"
          alt="Statistics diagramm"
          size="big"
        />
        <MenuCard
          text="History"
          imgSrc={HistorySrc}
          href="#"
          alt="History logo"
          size="big"
        />
        <MenuCard
          text="Milestone"
          imgSrc={MilestoneSrc}
          href="#"
          alt="Milestone logo"
          size="big"
        />
      </div>
    </>
  );
}
