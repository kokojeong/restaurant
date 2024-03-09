import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/login.css';

function SearchID(props){

    const {joinedMembers, setJoinedMembers} = props;

    const [isActive, setIsActive] = useState(true);
    const [name, setName] = useState('');
    const [idResult, setIdResult] = useState('');
    const [pwResult, setPwResult] = useState('');

    // useEffect(()=>console.log(joinedMembers),[joinedMembers])

    const handleTabClick = useCallback(()=>{
        setIsActive(!isActive);
        idRef.current.style.display = 'none';
        pwRef.current.style.display = 'none';
    },[isActive]);

    const idRef = useRef(null);
    const pwRef = useRef(null);
    const popRef = useRef(null);

    const navigate = useNavigate();

    const handleSearchIdClick = useCallback((e) => {
        e.preventDefault();

        const enteredName = e.target.form.name.value;
        const enteredPhone = e.target.form.phone.value;

        const foundMember = joinedMembers.find(
            (m) => m.name === enteredName && m.phone === enteredPhone
        );

        if (foundMember) {
            idRef.current.style.display = 'block';
            pwRef.current.style.display = 'none'; // 비밀번호 찾기 부분을 숨깁니다.
            setName(enteredName);
            setIdResult(foundMember.id);
        } else {
            idRef.current.style.display = 'none';
            popRef.current.style.display = 'block';
        }
    }, [joinedMembers]);

    const handleSearchPwClick = useCallback((e) => {
        e.preventDefault();

        const enteredName = e.target.form.name.value;
        const enteredPhone = e.target.form.phone.value;

        const foundMember = joinedMembers.find(
            (m) => m.name === enteredName && m.phone === enteredPhone
        );

        if (foundMember) {
            pwRef.current.style.display = 'block';
            idRef.current.style.display = 'none'; // 아이디 찾기 부분을 숨깁니다.
            setName(enteredName);
            setPwResult(foundMember.password);
        } else {
            pwRef.current.style.display = 'none';
            popRef.current.style.display = 'block';
        }
    }, [joinedMembers]);

    const handleClose = () => {
        if (popRef.current) {
            popRef.current.style.display = 'none'; // useRef로 가져온 요소를 조작하여 팝업을 감춤
        }
    }

    const handleSignUp = () => {
        // 회원가입 버튼 클릭 시 회원가입 페이지로 이동
        navigate('/register');
    };

    return(
        <>
            <section id='login_section'>
                <ul className='login_form'>
                    <li className='login tab'>
                        <h3 onClick={handleTabClick} className={isActive ? 'tab_active' : ''}>아이디 찾기</h3>
                        <div className={isActive ? 'active' : ''}>
                            <form id='login_join'>
                                <input type='text' name='name' placeholder='이름'/>
                                <input type='text' name='phone' placeholder='휴대폰 번호'/>
                                <button className='btn blue' type='submit' onClick={handleSearchIdClick}>확인</button>
                            </form>
                        </div>
                    </li>
                    <li className='no_member tab'>
                        <h3 onClick={handleTabClick} className={isActive ? '' : 'tab_active'}>비밀번호 찾기</h3>
                        <div className={isActive ? '' : 'active'}>
                            <form id='login_join'>
                                {/* <input type='text' name='checkName' placeholder='아이디'/> */}
                                <input type='text' name='name' placeholder='이름'/>
                                <input type='text' name='phone' placeholder='휴대폰 번호'/>
                                <button className='btn blue' type='submit' onClick={handleSearchPwClick}>확인</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </section>
            <section ref={idRef} id='search'>
                <div>{idResult && <p>{name}님의 아이디는 <span>{idResult}</span> 입니다.</p>}</div>
            </section>
            <section ref={pwRef} id='search'>
                <div>{pwResult && <p>{name}님의 비밀번호는 <span>{pwResult}</span> 입니다.</p>}</div>
            </section>
            <div id='pop' ref={popRef} className='pop join'>
                <div className='pop_up'>
                    <div className='close_btn' id="no" onClick={handleClose}></div>
                    <div className='pop_text'>회원 정보가 없습니다. <br/>회원가입 창으로 이동하겠습니다.</div>
                    <div className='btn_box'>
                    <button className='btn blue' onClick={handleSignUp}>확인</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchID;