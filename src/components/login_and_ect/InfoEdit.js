import React, {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/register.css";

function InfoEdit(props){
   const {joinedMembers, setJoinedMembers}=props;

   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [id, setId] = useState('');
   const [birthday, setBirthday] = useState('');
   const [password, setPassword] = useState('');
   const [passwordCheck, setPasswordCheck] = useState('');
   const [idDuplicated, setIdDuplicated] = useState(null);
   const [join, setJoin] = useState(true);
   
   // const loggedInUserInfo = getLoggedInUserInfo();

   const inJoinRef = useRef(null);
   const joinRef = useRef(null);
   
   const navigate = useNavigate();

   // useEffect(() => {
   //    // 가져온 회원 정보를 입력 폼에 세팅
   //    if (loggedInUserInfo) {
   //       setName(loggedInUserInfo.name);
   //       setPhone(loggedInUserInfo.phone);
   //       setId(loggedInUserInfo.id);
   //       setBirthday(loggedInUserInfo.birthday);
   //       // 비밀번호는 입력되면 안 되므로 비워둠
   //       setPassword('');
   //       setPasswordCheck('');
   //    }
   // }, [loggedInUserInfo]);

   const handleJoinClick = (e) => {
      e.preventDefault();
   
      // 회원 여부 확인
      const foundMember = joinedMembers.find((m) => m.name === name && m.phone === phone);
   
      if (foundMember) {
         // 이미 가입된 회원인 경우 메시지 표시
         inJoinRef.current.style.display = 'block';
      } else {
         // 가입되지 않은 회원인 경우 메시지 표시
         joinRef.current.style.display = 'block';
      }
   };

   const handleConfirmClick = (e) => {
      joinRef.current.style.display = 'none';
      setJoin(!join);
      
   
      if (!join) {
         const isPasswordValid = password.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_/-])[A-Za-z\d@$!%*#?&_/-]{8,}$/.test(password);
         const isPasswordMatch = password === passwordCheck;
         const isBirthdayValid = birthday.length >= 8;
   
         if (id && isPasswordValid && isPasswordMatch && isBirthdayValid) {
         const newMember = {
            name: name,
            phone: phone,
            id: id,
            password: password,
            birthday: birthday,
            // ... (다른 필요한 정보도 추가 가능)
         };
   
         const isExistingMember = joinedMembers.some(
            (member) => member.name === newMember.name && member.phone === newMember.phone
         );
   
         if (isExistingMember) {
            inJoinRef.current.style.display = 'block';
         } else {
            setJoinedMembers((prevMembers) => [...prevMembers, newMember]);
   
            // 회원가입이 완료되면 입력된 값들을 초기화합니다.
            setName('');
            setPhone('');
            setId('');
            setPassword('');
            setPasswordCheck('');
            setBirthday('');
   
            console.log('새로 가입한 회원 정보:', newMember);
            alert('회원가입이 완료되었습니다.');
            navigate('/login')
         }
         } else {
         // 조건이 충족되지 않았을 때 해당 부분에 에러 메시지 표시
         if (!id) {
            alert('아이디를 입력해주세요.');
            e.preventDefault();
         }
         if (!isPasswordValid) {
            alert('비밀번호는 영문, 숫자, 특수문자를 포함하여 8자리 이상이어야 합니다.');
            e.preventDefault();
         }
         if (!isPasswordMatch) {
            alert('비밀번호가 일치하지 않습니다.');
            e.preventDefault();
         }
         if (!isBirthdayValid) {
            alert('생년월일은 8자리 이상이어야 합니다.');
            e.preventDefault();
         }
         }
      }
   };

   const handleClose = (e) => {
   const tmp = e.target.id;
   if (tmp === 'no') {
      joinRef.current.style.display = 'none';
   } else if (tmp === 'yes') {
      inJoinRef.current.style.display = 'none';
   }
   };

   const handleIdCheck = (e) => {
   e.preventDefault();

   const isDuplicated = joinedMembers.some((m) => m.id === id);
   setIdDuplicated(isDuplicated);

   if (isDuplicated) {
      alert('이미 사용 중인 아이디입니다.');
   } else {
      alert('사용 가능한 아이디입니다.');
   }
   };

   const isPasswordValid = (password) => {
   // 비밀번호 규칙 확인
   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
   return passwordRegex.test(password);
   };

   const isBirthdayValid = (birthday) => {
   // 생년월일 형식 확인 (8자리 숫자)
   const birthdayRegex = /^\d{8}$/;
   return birthdayRegex.test(birthday);
   };
   
   const routeLogin = () => {
      navigate('/login');
   };

   const routeSearchId = () => {
      navigate('/searchID');
   };

   return(
      <>
         <section id="join_page">
            <h2 className="join_title">회원 정보 수정</h2>
            <hr />
            <form>
            <div className="input_box">
               <h4>이름</h4>
               <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
               />
            </div>
            <hr />
            <div className="input_box">
               <h4>휴대폰번호</h4>
               <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
               />
            </div>
            <hr />
            <div className="input_box" style={{marginTop: "-45px"}}>
               <h4>아이디</h4>
               <input
                  type="text"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
               />
            </div>
            <hr />
            <div className="input_box">
               <h4>비밀번호</h4>
               <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
               />
               <span style={{ color: password ? (isPasswordValid(password) ? 'green' : 'red') : 'black' }}>
                  영문, 숫자, 특수문자 포함 8자리 이상
               </span>
            </div>
            <hr />
            <div className="input_box">
               <h4>비밀번호 확인</h4>
               <input
                  type="password"
                  name="password_check"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
               />
               {passwordCheck && (
                  <span style={{ color: password === passwordCheck ? 'green' : 'red' }}>
                  {password === passwordCheck ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다'}
                  </span>
               )}
            </div>
            <hr />
            <div className="input_box">
               <h4>생년월일</h4>
               <input
                  className="birthday"
                  type="text"
                  placeholder="(ex) 20001010"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
               />
               <span style={{ color: !birthday ? 'black' : (isBirthdayValid(birthday) ? 'green' : 'red') }}>
               {!birthday
                  ? '생년월일을 8자로 입력해주세요'
                  : isBirthdayValid(birthday)
                  ? '생년월일 8자로 입력하세요'
                  : '생년월일 8자로 입력해주세요'}
            </span>
                  
               
            </div>
            <hr />
            <button type="button" className="btn blue" onClick={handleConfirmClick}>
               확인
            </button>
            </form>
         </section>
      </>
   )
}

export default InfoEdit;