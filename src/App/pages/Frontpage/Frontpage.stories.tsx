import Frontpage from './Frontpage';

export default {
  Page: Frontpage,
  title: 'Pages/Frontpage',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Frontpage />;
