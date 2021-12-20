import styles from './LocationInput.module.css';
import { useMap, useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';

type LocationInputProps = {
  setPosition: (position: LatLng) => void;
  onAdd: (latlng: LatLng) => void;
};

export default function LocationInput({ setPosition }: LocationInputProps) {
  const map = useMap();
  const locateAndFly = () => {
    map.locate({ setView: true, maxZoom: map.getZoom() });
  };

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return (
    <button onClick={() => locateAndFly()} className={styles.location_button}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM8.75 11.25C8.75 7.8 11.55 5 15 5C18.45 5 21.25 7.8 21.25 11.25C21.25 14.85 17.65 20.2375 15 23.6C12.4 20.2625 8.75 14.8125 8.75 11.25Z"
          fill="white"
        />
        <path
          d="M15 14.375C16.7259 14.375 18.125 12.9759 18.125 11.25C18.125 9.52411 16.7259 8.125 15 8.125C13.2741 8.125 11.875 9.52411 11.875 11.25C11.875 12.9759 13.2741 14.375 15 14.375Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
