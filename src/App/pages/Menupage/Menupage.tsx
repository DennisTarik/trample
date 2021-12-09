import MenuCard from '../../components/MenuCard/MenuCard';
import styles from './Menupage.module.css';
import StatisticsSrc from '../../../assets/Statistics.svg';
import ProfileSrc from '../../../assets/Profile.jpg';

export default function Menupage(): JSX.Element {
  return (
    <div className={styles.menu}>
      <MenuCard text="Statistics" imgSrc={StatisticsSrc} href="#" />
      <MenuCard text="Profile" imgSrc={ProfileSrc} href="#" />
    </div>
  );
}
