import React from 'react';
import { InfoWindowF } from '@react-google-maps/api';
import { faClock, faPhone, faCar, faStore,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/default_style.css';
import {useNavigate } from 'react-router-dom'; //추가

const InfoStyle = {
  // background: "#FFFDF7",
  width: "100%",
  height: "100%",
  padding: '10px',
}
const SpanStyle = {
  marginRight: '5px'
}
const IconStyle = {
  color: '#6D8FB4'
}
const ButtonStyle = {
  width: 190 + "px",
  height: 52 + "px",
  fontSize: 20 + "px",
  background: "#6D8FB4",
  borderRadius: 10 + "px",
  border: "0",
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight:  47 + "px",
  transition: 'background 0.3s ease'
}
const MarkerStyle = {
  width:250+"px", 
  height:300+"px",
  fontSize:16+"px",
  textAlign:"left",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  flexDirection:"column",
  gap:"30px"
}
const h1Style2 = {
  textAlign:"center"
}
const spanStyle = {
  width:'200px',
  height: '200px',
  display:"flex",
  justifyContent:"space-between",
  alignItems:"flex-start",
  flexDirection:"column",
  marginLeft:"12px"
}

const MapInfoWindow = (props) => {

  const {selectedMarker,
    busan,
    seoul,
    jeju,
    setSelectedMarker,
    setCenter,
    setZoom,
    infoWindowStyle,
    FontAwesomeIcon,    
  }=props;
        
  const navigate = useNavigate();  // useHistory 대신 useNavigate 사용

  const handleReservationClick = () => {
    navigate('/booking', { state: { selectedStore: 'JEJU' } });
  };
  
  return (
    <InfoWindowF
    style={InfoStyle }
    
      position={selectedMarker === 'busan' ? busan : selectedMarker === 'seoul' ? seoul : jeju}
      options={{ pixelOffset: new window.google.maps.Size(0, -50) }}
      onCloseClick={() => {
        setSelectedMarker(null);
        setCenter({ lat: 35.6000, lng: 127.269311 });
        setZoom(7);  // 수정
      }}
    >
      
      <div style={infoWindowStyle}>
      {selectedMarker === 'jeju' && (
        <div style={MarkerStyle}>
          <h1 style={h1Style2}>Jeju Store Info</h1>
          <div style={spanStyle}>
            <p>
              <span style={SpanStyle}><FontAwesomeIcon icon={faClock} style={IconStyle} /></span> Mon - Sun 10:00 - 20:00
            </p>
            <p>
              <span style={SpanStyle}><FontAwesomeIcon icon={faClock} style={IconStyle} /></span> BreakTime 14:00 - 16:00
            </p>
            <p>
              <span style={SpanStyle}><FontAwesomeIcon icon={faPhone} style={IconStyle} /></span> 063 456 6780
            </p>
            <p>
              <span style={SpanStyle}><FontAwesomeIcon icon={faCar} style={IconStyle} /></span> 주차 가능
            </p>
            <p>
              <span style={SpanStyle}><FontAwesomeIcon icon={faStore} style={IconStyle} /></span> 제주시 광양동 광양9길
            </p>
          </div>
            <button
              onClick={handleReservationClick}
              style={ButtonStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#6D8FB4";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#7A9DC2";
              }}
              onMouseDown={(e) =>{
                e.currentTarget.style.background = "#fff";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.background = "#6D8FB4";
              }}
            >
              예약하러 가기 <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </div>
      )}
      {selectedMarker === 'seoul' && (
        <div style={MarkerStyle}>
          <h1 style={h1Style2}>Seoul store</h1>
          <h2 style={h1Style2}>Coming soon!</h2>
          <p style={h1Style2}>더 많은 정보를 기대해주세요.</p>
        </div>
      )}
      {selectedMarker === 'busan' && (
        <div style={MarkerStyle}>
          <h1 style={h1Style2}>Busan store</h1>
          <h2 style={h1Style2}>Coming soon!</h2>
          <p style={h1Style2}>더 많은 정보를 기대해주세요.</p>
        </div>
      )}
    </div>
    </InfoWindowF>
  );
};

export default MapInfoWindow;