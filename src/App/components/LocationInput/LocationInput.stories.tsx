import LocationInput from './LocationInput';

export default {
  component: LocationInput,
  title: 'Components/LocationInput',
};

export const Default = () => (
  <LocationInput setPosition={console.log} onAdd={console.log} />
);
