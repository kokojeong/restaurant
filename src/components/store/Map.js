import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faPhone, faCar, faStore } from '@fortawesome/free-solid-svg-icons';
import MapMarker from './MapMarker';
import MapInfoWindow from './MapInfoWindow';
import '../../assets/styles/default_style.css';

const containerStyle = {
  width: '80%',
  height: '600px',
  margin: '200px auto',
};
const seoul = { lat: 37.5664, lng: 126.9655 };
const jeju = { lat: 33.5002, lng: 126.5312 };
const busan = { lat: 35.20607, lng: 129.12397 };

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCBeVGUAyeMKBuBgir1ZNSHBOO6pWA-WAo",
  });
  const [map, setMap] = React.useState(null);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [center, setCenter] = React.useState({ lat: 35.6000, lng: 127.269311 });
  const [zoom, setZoom] = React.useState(7); // 추가

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const myStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];

  if (!isLoaded) return <div>Loading...</div>;

  const infoWindowStyle = {
    // backgroundColor: '#FFFDF7',
    padding: '10px',
    // position: 'relative',
  };

  const h1Style1 = {
    position: 'absolute',
    top: '140px',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: '0',
  };

  return (
    <>
      <h1 style={h1Style1}>STORE</h1>
      <GoogleMap
        zoom={zoom}  // 수정
        options={{ disableDefaultUI: true, styles: myStyles,disableDefaultUI: true,
          styles: myStyles,
          minZoom: selectedMarker ? zoom : 7, //이거 7.5로하면 안됨 축소 시도할때 글씨 깨짐
            }}
        center={center}
        mapContainerStyle={containerStyle}
        mapContainerClassName="map-container"
        onLoad={onLoad}
        style={{ width: 100 + "%", margin: '0 auto' }}
          >
        <MapMarker 
          busan={busan} 
          seoul={seoul} 
          setSelectedMarker={setSelectedMarker} 
          setCenter={setCenter} 
          setZoom={setZoom} 
          jeju={jeju}>
        </MapMarker>
        {selectedMarker && (
          <MapInfoWindow 
            selectedMarker={selectedMarker} 
            busan={busan}
            seoul={seoul} 
            jeju={jeju} 
            setSelectedMarker={setSelectedMarker} 
            setCenter={setCenter} 
            setZoom={setZoom} 
            infoWindowStyle={infoWindowStyle} 
            FontAwesomeIcon={FontAwesomeIcon}
            >
          </MapInfoWindow>
        )}
      </GoogleMap>
    </>
  );
};
export default Map;
