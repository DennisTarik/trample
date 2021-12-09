import MenuCardSmall from './MenuCardSmall';
import HistorySrc from '../../../assets/History.svg';
import MilestoneSrc from '../../../assets/Milestone.svg';

export default {
  component: MenuCardSmall,
  title: 'Components/MenuCardSmall',
  parameters: {
    layout: 'fullscreen',
  },
};

export const History = () => (
  <MenuCardSmall text="" imgSrc={HistorySrc} href="#" alt="" />
);
export const Milestone = () => (
  <MenuCardSmall text="" imgSrc={MilestoneSrc} href="#" alt="" />
);
