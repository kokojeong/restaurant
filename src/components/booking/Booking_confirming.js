import React from "react";

function Booking_confirming(){
    const [isPopUp, setIsPopUp] = useState(false); // 상태 변수 isPopUp을 선언하고 기본값으로 false를 할당
    const popRef = useRef(null); // pop 요소에 대한 useRef

    const handleClose = () => {
        if (popRef.current) {
            popRef.current.style.display = 'none'; // useRef로 가져온 요소를 조작하여 팝업을 감춤
            setIsPopUp(isPopUp? !isPopUp:isPopUp);
        }
    }

    return(
        <div id='pop' ref={popRef} className={isPopUp ? 'pop_open' : ''}>
            <div className='pop_up'>
                <div className='close_btn' onClick={handleClose}></div>
                <div className='pop_text'>아이디 혹은 비밀번호가 <br/> 일치하지 않습니다.</div>
                <div className='btn_box'>
                    <button className='btn blue' onClick={handleSignUp}>회원가입</button>
                    <button className='btn beige' onClick={handleFindCredentials}>아이디/비밀번호 찾기</button>
                </div>
            </div>
        </div>
    )
}
export default Booking_confirming;