import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const MapComponent=()=>{
    return(
        <div className="row">
            <div className="col-md-12 mt-3" style={{height:100}}>
            {/* <MapContainer center={[19.11175589939869, 72.83289439733544]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={[19.11175589939869, 72.83289439733544]}>
            
            <Popup isOpen={true}>
                @SMVITA
            </Popup>
            </Marker>
            </MapContainer> */}
            <MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
            </div>
        </div>
    )
}

export default MapComponent;