import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import "./MapContainer.css";

const MapContainer = (props) => {
  return (
    <div className="mapWrapper">
      <Map
        google={props.google}
        zoom={12}
        initialCenter={{
          lat: 44.815071,
          lng: 20.46048,
        }}
      ></Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAOqo3-dqvdBWmjL1slY4B5y6vkUzMAdbs",
})(MapContainer);
