import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";

function Map(){

    return ( 
      <div className="row">
    <div className="col-md-9 mt-3">
    <MapContainer center={[19.11175589939869, 72.83289439733544]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[19.11175589939869, 72.83289439733544]}>
            
          <Popup isOpen={true}>
           @SMVITA
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      </div>
      );
}

export default Map;