import React from 'react';
import Taskbar from './Taskbar';

export default {
  component: Taskbar,
  title: 'Components/Taskbar',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Taskbar />;
