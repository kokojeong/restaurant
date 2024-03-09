import React,{useState, useEffect} from 'react';

export default function Booking_store(props) {
  // 선택된 지점을 추적하는 상태 변수
  const {setSelectedLocation,setSelectstore,selectedLocation} = props

  useEffect(() => {
    setSelectstore(selectedLocation);
  },[selectedLocation, setSelectstore]);

  const handleLocationChange = (location) => {
    // 선택된 지점 업데이트
    setSelectedLocation(location);
    setSelectstore(location);
  };

  // selectedLocation 값이 null인 경우 렌더링하지 않음
  if (selectedLocation === null) {
    return null;
  }

  return (
    <>
      <section className="main_step1">
        <div className="step1_top step">
          <span className="step_first">STEP1</span>
          <span> 지점선택</span>
          <div className="slide_back"></div>
        </div>
        <div className="spot_main">
          <div
            className={`seoul store ${selectedLocation === 'SEOUL' ? 'selected' : ''}`}
            onClick={() => handleLocationChange('SEOUL')}
          >
            <input type="radio" id="sel1" name="location"></input>
            <label htmlFor="sel1" className={selectedLocation === 'SEOUL' ? 'SEOUL hover' : 'SEOUL'}></label>
            <div className="check"></div>
            <p>SEOUL(서울)</p>
          </div>
          <div
            className={`busan store ${selectedLocation === 'BUSAN' ? 'selected' : ''}`}
            onClick={() => handleLocationChange('BUSAN')}
          >
            <input type="radio" id="sel2" name="location"></input>
            <label htmlFor="sel2" className={selectedLocation === 'BUSAN' ? 'BUSAN hover' : 'BUSAN'}></label>
            <div className="check"></div>
            <p>BUSAN(부산)</p>
          </div>
          <div
            className={`jeju store ${selectedLocation === 'JEJU' ? 'selected' : ''}`}
            onClick={() => handleLocationChange('JEJU')}
          >
            <input type="radio"  id="sel3" name="location"></input>
            <label htmlFor="sel3" className={selectedLocation === 'JEJU' ? 'JEJU hover' : 'JEJU'}></label>
            <div className="check"></div>
            <p>JEJU(제주)</p>
          </div>
        </div>
      </section>
    </>
  );
}
