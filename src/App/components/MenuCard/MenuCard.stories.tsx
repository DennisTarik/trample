import MenuCard from './MenuCard';
import StatisticsSrc from '../../../assets/Statistics.svg';
import ProfileSrc from '../../../assets/Profile.jpg';

export default {
  component: MenuCard,
  title: 'Components/MenuCard',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Statistics = () => (
  <MenuCard text="Dennis" imgSrc={StatisticsSrc} href="#" />
);
export const Profile = () => (
  <MenuCard text="Leon" imgSrc={ProfileSrc} href="#" />
);
