import styles from './MapComponent.module.css';
import LocationInput from '../LocationInput/LocationInput';
import { LatLng } from 'leaflet';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddressInput from '../AddressInput/AddressInput';

export default function MapComponent(): JSX.Element {
  const [position, setPosition] = useState(new LatLng(0, 0));
  const [markers, setMarkers] = useState<LatLng[]>([]);

  const handleAdd = (latLng: LatLng) => {
    setMarkers((markers) => [...markers, latLng]);
  };

  return (
    <div>
      <MapContainer
        className={styles.map}
        center={[47.99066842, 7.847929]}
        zoom={20}
        scrollWheelZoom={true}
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
          <Popup>Paul</Popup>
        </Marker>
        <Marker position={[48.227828, 7.750191]}>
          <Popup>Flavio</Popup>
        </Marker>
        <Marker position={[48.1283, 8.001555]}>
          <Popup>Noemi</Popup>
        </Marker>
        <Marker position={[47.77778, 8.181662]}>
          <Popup>Thomas</Popup>
        </Marker>
        <Marker position={[48.306683, 8.636517]}>
          <Popup>Fabianna</Popup>
        </Marker>
        <LocationInput setPosition={setPosition} onAdd={handleAdd} />
      </MapContainer>
      <AddressInput />
    </div>
  );
}
