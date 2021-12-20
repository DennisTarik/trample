import Taskbar from './Taskbar';

export default {
  component: Taskbar,
  title: 'Components/Taskbar',
};

export const Default = () => (
  <Taskbar
    onSettings={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
