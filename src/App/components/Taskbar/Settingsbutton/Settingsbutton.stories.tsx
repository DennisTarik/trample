import Settingsbutton from './Settingsbutton';

export default {
  component: Settingsbutton,
  title: 'Components/Settingsbutton',
};

export const Default = () => (
  <Settingsbutton
    onClickHandler={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
