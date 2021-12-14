import styles from './MapComponent.module.css';
import { useState } from 'react';
import { LatLngExpression } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    position && (
      <Marker position={position}>
        <Popup>You are Here</Popup>
      </Marker>
    )
  );
}

export default function MapComponent(): JSX.Element {
  return (
    <MapContainer
      className={styles.map}
      center={[47.99066842, 7.847929]}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[47.99066842, 7.847929]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
}
