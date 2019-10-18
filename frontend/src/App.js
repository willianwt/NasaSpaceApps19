import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import Pin from './pin';

const fireplaces = require('./nasaFile.json'); 

const TOKEN = "pk.eyJ1IjoibGVvbmFyZG9tc2kiLCJhIjoiY2sxczhvb3I2MDFndDNubTdoYnh3azRhMiJ9.GCxPstmeD4nFSpNni_h79A"; 

parseFloat(fireplaces.latitude);
parseFloat(fireplaces.longitude);

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: -15.766737,
    longitude: -47.849603,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
      
  
  const [places] = useState(fireplaces);
  
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        >

          {places.map((place, id) =>(
            <Marker
              key={id}
              latitude= {(place.latitude < -15.338396 && place.latitude > -16.165006) ? place.latitude : -15.766737}
              longitude= {(place.longitude < -47.113581 && place.longitude > -48.507557)? place.longitude : -47.849603}
            >
              <Pin size={20}/>
            </Marker>
        
          ))}
      </ReactMapGL>
    </div>
  );

}
