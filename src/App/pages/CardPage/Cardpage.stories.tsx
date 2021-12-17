import CardPage from './Cardpage';

export default {
  Page: CardPage,
  title: 'Pages/CardPage',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <CardPage />;
