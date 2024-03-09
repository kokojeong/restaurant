import React from 'react';
import '../../assets/styles/my_page.css';
import { useNavigate } from 'react-router-dom';

import reservation from '../../assets/images/Calender.png';
import inquiry from '../../assets/images/Customer.png';
import info_edit from '../../assets/images/Profile.png';
import withdrawal from '../../assets/images/Out.png';

function MyPage(props){

   const {joinedMembers, setJoinedMembers, loginInfo, setLoginInfo} = props;

   console.log(loginInfo);

   const navigate = useNavigate();

   const routeReservation = () => {
      navigate('/booking'); 
   };
   const routeInquiry = () => {
      navigate('/'); 
   };
   const routeEdit = () => {
      navigate('/infoEdit'); 
   };
   const routeWithdrawal = () => {
      navigate('/'); 
   };

   return(
      <>
         <section id='my_page'>
            <h1>My Page</h1>
            <div className='info_box'>
               <div className='info'>
                  <div className='name box'>
                     <p>이름 </p>
                     <span>{loginInfo.name}</span>
                  </div>
                  <div className='phone box'>
                  <p>휴대폰번호 </p>
                  <span>{loginInfo.phone}</span>
                  </div>
               </div>
            </div>
            <div className='buttons'>
               <div className='my_reservation button' onClick={routeReservation}>
                  <div className='my_reservation icon'>
                     <img src={reservation}/>
                  </div>
                  <h4>나의 예약</h4>
               </div>
               <div className='inquiry button' onClick={routeInquiry}>
                  <div className='inquiry icon'>
                     <img src={inquiry}/>   
                  </div>
                  <h4>1 : 1 문의</h4>
               </div>
               <div className='info_edit button' onClick={routeEdit}>
                  <div className='info_edit icon'>
                  <img src={info_edit}/>
                  </div>
                  <h4>회원 정보 수정</h4>
               </div>
               <div className='withdrawal button' onClick={routeWithdrawal}>
                  <div className='withdrawal icon'>
                     <img src={withdrawal}/>
                  </div>
                  <h4>회원 탈퇴</h4>
               </div>
            </div>
         </section>
      </>
   )
}

export default MyPage;