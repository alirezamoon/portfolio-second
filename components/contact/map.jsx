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
        attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="'https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={iconPerson}>
        <Popup>I am here</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
