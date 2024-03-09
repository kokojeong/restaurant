import React,{useCallback, useContext} from "react";
import { ContextData } from "../../App";

export default function Booking_side(props) {
  const {selectstore, selectperson, selectdate, selecttime, selecttime2, table, price} = props;
  const { updateBooking, loginInfo } = useContext(ContextData);  
  // useContext를 사용하여 데이터 가져오기

  const handlePayment = useCallback(()=>{
    if (!selectstore || !selectperson || !selectdate || !selecttime || !selecttime2 || !table || !price) {
      alert("예약 정보를 모두 선택해주세요.");
      return;
    }

    // 예약 정보
    const reservationData = {
      member: loginInfo.name,
      member_phone: loginInfo.phone,
      person: selectperson,
      date: selectdate,
      time: `${selecttime} ${selecttime2}`,
      table: table,
      price: price
    };

    // 기존 예약 데이터에 새로운 예약 추가
    if( reservationData.member === '' && reservationData.member_phone === '' ){
      alert("예약하려면 로그인이 필요합니다.")
      return;
    }
    updateBooking(reservationData);
  },[selectstore, selectdate, selectperson, selecttime, selecttime2, table, price]);

  const clickselectperson = () => {
    if (selectperson) {
      return `${selectperson} 명`;
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="side_menu">
        <aside>
          <div className="aside_top">
            <h3>예약정보</h3>
            <div className="top_slide_back"></div>
          </div>
          <div className="aside_mid1">
            <p>지점: {selectstore}</p>
            <div className="mid1_slide_back"></div>
          </div>
          <div className="aside_mid2">
            <p>인원: {clickselectperson()}</p>
            <p>날짜: {selectdate}</p>
            <p>시간: {selecttime} {selecttime2}</p>
            <div className="mid2_slide_back"></div> 
          </div>
          <div className="aside_mid3">
            <p>테이블: {table}</p>
            <div className="mid3_slide_back"></div>
          </div>
          <div className="aside_bot1">
            <div className="bot1_pay">
              <p>총 금액</p>
              <p>{price}원</p>
            </div>
            <button type="button" onClick={handlePayment}>
              결제
            </button>
          </div>
          <div className="aside_bot2">
            <ul>
              <li>예약금은 예약 당일 식사 금액 결제 후 환불됩니다.</li>
              <li>예약일 일주일 전부터는 환불이 불가합니다.</li>
              <li>
                취소 날짜에 따른 환불금액의 자세한 사항을 알고 싶으시면, 아래의
                버튼을 눌러 이동하세요.
              </li>
            </ul>
            <a href="#">환불규정관리</a>
          </div>
        </aside>
      </div>
      {/* <div id='pop' ref={popRef} className={isPopUp ? 'pop_open' : ''}>
          <div className='pop_up'>
              <div className='close_btn' onClick={handleClose}></div>
              <div className='pop_text'>아이디 혹은 비밀번호가 <br/> 일치하지 않습니다.</div>
              <div className='btn_box'>
                  <button className='btn blue' onClick={handleSignUp}>회원가입</button>
                  <button className='btn beige' onClick={handleFindCredentials}>아이디/비밀번호 찾기</button>
              </div>
          </div>
      </div> */}
    </>
  );
}
