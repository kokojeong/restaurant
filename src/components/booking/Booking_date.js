import React, { useState,useEffect } from "react";

export default function DATE({setSeledate}){
  const [currentDate, setCurrentDate] = useState(getFormattedDate());
  const maxDate = getFormattedDate(21); // 3주 후
  const minDate = getFormattedDate(0);

  const handledate = (event) => {
    const selectedDate = event.target.value;
    setCurrentDate(selectedDate); // currentDate를 선택한 날짜로 업데이트
    setSeledate(selectedDate);
  };

  useEffect(() => {
    setCurrentDate(getFormattedDate());
  }, []);

  function getFormattedDate(offset = 0) {
    const today = new Date();
    today.setDate(today.getDate() + offset);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return(
    <>
    <div className="main_step3">
      <div className="step3">
        <span className="step_first">STEP3</span>
        <span> 날짜 선택</span>
        <div className="step3_slide_back"></div>
          <div className="date">
            <ul>
              <li>현재 날로부터 3주까지 예약 가능합니다.</li>
            </ul>
            <div>
             <input type="date" className="date" min={minDate}
             max={maxDate} value={currentDate} onChange={handledate}/>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}