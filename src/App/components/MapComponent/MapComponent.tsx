import styles from './MapComponent.module.css';
import LocationInput from '../LocationInput/LocationInput';
import { LatLng } from 'leaflet';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent(): JSX.Element {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const [markers, setMarkers] = useState<LatLng[]>([]);

  const handleAdd = (latLng: LatLng) => {
    setMarkers((markers) => [...markers, latLng]);
  };

  return (
    <MapContainer
      className={styles.map}
      center={[47.99066842, 7.847929]}
      zoom={20}
      scrollWheelZoom={false}
    >
      {position && (
        <Marker position={position}>
          <Popup>You are Here</Popup>
        </Marker>
      )}
      {markers.map((marker) => (
        <Marker key={marker.toString()} position={marker} />
      ))}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[47.99066842, 7.847929]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationInput setPosition={setPosition} onAdd={handleAdd} />
    </MapContainer>
  );
}
