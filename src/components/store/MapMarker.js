// Marker.js
import React from 'react';
import { MarkerF } from '@react-google-maps/api';


const MapMarker = (props) => {
  const {busan,seoul,setSelectedMarker,setCenter,setZoom,jeju}=props;
  return (
    <>
      <MarkerF
          position={busan}
          icon={{
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={(e) => {
            setSelectedMarker('busan');
            setCenter(busan);
            setZoom(16);
          }}
        />
        <MarkerF
          position={seoul}
          icon={{
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={(e) => {
            setSelectedMarker('seoul');
            setCenter(seoul);
            setZoom(16);
          }}
        />
        <MarkerF
          position={jeju}
          icon={{
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={(e) => {
            setSelectedMarker('jeju');
            setCenter(jeju);
            setZoom(16);
          }}
        />
    </>
  )
};

export default MapMarker;
