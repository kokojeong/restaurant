import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import '../../assets/styles/default_style.css';
import '../../assets/styles/login.css';
import member from '../../assets/json/member.json';
import {useLocation} from 'react-router-dom';



function LoginForm(props){

    const {isLogged, setIsLogged, joinedMembers, setJoinedMembers, loginInfo, setLoginInfo} = props;

    const location = useLocation();
    const [isActive, setIsActive] = useState(true); // 상태 변수 isActive를 선언하고 기본값으로 true를 할당
    const [isPopUp, setIsPopUp] = useState(false); // 상태 변수 isPopUp을 선언하고 기본값으로 false를 할당
    const popRef = useRef(null); // pop 요소에 대한 useRef
    const navigate = useNavigate();

    useEffect(()=>console.log(joinedMembers),[joinedMembers]);

    const handleTabClick = useCallback(()=>{
        setIsActive(!isActive);
        navigate('/', {state : {}})
          // isActive의 값을 반전시켜서 새로운 상태로 설정
    },[isActive]);

    const handlePopClick = useCallback((e) => {
        e.preventDefault();

        const enteredId = e.target.form.id.value;
        const enteredPw = e.target.form.pw.value;

        const foundMember = joinedMembers.find(
            (m) => m.id === enteredId && m.password === enteredPw
        );

        if (foundMember) {
            // console.log(foundMember);
            setIsLogged(true);
            setLoginInfo(()=>({...foundMember})); // 로그인 정보를 상태에 저장
            navigate("/");
            // console.log(foundMember);
            // console.log(loginInfo);
        } else {
            setIsLogged(isLogged);
            popRef.current.style.display = 'block';
            setIsPopUp(true);
        }
    },[joinedMembers]);


    const handleClose = () => {
        if (popRef.current) {
            popRef.current.style.display = 'none'; // useRef로 가져온 요소를 조작하여 팝업을 감춤
            setIsPopUp(isPopUp? !isPopUp:isPopUp);
        }
    }

    const handleSignUp = () => {
        // 회원가입 버튼 클릭 시 회원가입 페이지로 이동
        navigate('/register');
    };

    const handleFindCredentials = () => {
        // 아이디/비밀번호 찾기 버튼 클릭 시 해당 페이지로 이동
        navigate('/searchID');
    };

    return(
        <>
            
            <section id='login_section'>
                <ul className='login_form'>
                    <li className='login tab'>
                        <h3 onClick={handleTabClick} className={isActive ? 'tab_active' : ''}>로그인</h3>
                        <div className={isActive ? 'active' : ''}>
                            <form id='login_join'>
                                <input type='text' name='id' id="id" placeholder='아이디'/>
                                <input type='password' name='pw'  id="pw" placeholder='비밀번호'/>
                                <button type='submit' onClick={handlePopClick} className='btn blue'>로그인</button>
                            </form>
                            <div className='sub'>
                                <Link to='/searchID'>ID 찾기</Link>
                                <span>|</span>
                                <Link to='/searchID'>Password 찾기</Link>
                                <span>|</span>
                                <Link to='/register'>회원가입</Link>
                            </div>
                        </div>
                    </li>
                    <li className='no_member tab'>
                        <h3 onClick={handleTabClick} className={isActive ? '' : 'tab_active'}>비회원 예약 확인</h3>
                        <div className={isActive ? '' : 'active'}>
                            <form id='login_join'>
                                <input type='text' name='checkName' placeholder='이름'/>
                                <input type='text' name='checkPhone' placeholder='핸드폰번호'/>
                                <button type='submit' className='btn blue'>예약 확인</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </section>
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
        </>
    )
}

export default LoginForm;