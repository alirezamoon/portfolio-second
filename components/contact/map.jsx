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
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=pk.eyJ1IjoiZGFya2FscGhhIiwiYSI6ImNrdXpiamE4Nzdhb3QzMnE2eWttcGd6Z2MifQ.864qAY7XT7oaAhjs95jesQ"
      />
      <Marker position={position} icon={iconPerson}>
        <Popup>I am here</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
