import { useState } from "react"
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet"
import L from "leaflet"

const iconPerson = new L.Icon({
  iconUrl: "/assets/images/marker.png",
  iconRetinaUrl: "/assets/images/marker.png",
  popupAnchor: [-0, -0],
  iconSize: [51, 71],
})

const Map = () => {
  const position = [30.27608011393118, 56.99194192886353]

  return (
    <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={iconPerson}>
        <Popup>I am here</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
