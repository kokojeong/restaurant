import React, {createContext, useMemo, useState, useEffect, useCallback} from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Main_page from "./components/main_page/Main_page";
import Booking from "./components/booking/Booking";
import Map from "./components/store/Map";
import LoginForm from "./components/login_and_ect/LoginForm";
import SearchID from "./components/login_and_ect/SearchID";
import Register from "./components/login_and_ect/Register";
import MyPage from "./components/login_and_ect/MyPage";
import InfoEdit from "./components/login_and_ect/InfoEdit";
import MenuPage from "./components/menu/menuPage";
import BrandIntro from "./components/brand/brand_intro";

import booking_data from "./assets/json/booking.json";

export const ContextData = createContext();

const initialLogInfo = {id:'', name:'', phone:'', password: '', birth:''}

function App(){
    //보건, 민정
    const [booking, setBooking] = useState(booking_data);     
    //소윤, 진서
    const [joinedMembers, setJoinedMembers] = useState([]);
    const [loginInfo, setLoginInfo] = useState(initialLogInfo); // 로그인 정보를 저장할 상태
    const [isLogged, setIsLogged] = useState(false);
    

    // console.log(joinedMembers);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 회원 데이터를 로드합니다.
        fetchMemberData();
    }, []);
    
    const fetchMemberData = async () => {
        try {
            // JSON 파일 데이터 로드
            const response = await fetch('/member.json'); // public 폴더에 있으므로 /member.json으로 접근
            const data = await response.json();
        
            // Filter out empty objects from the data
            const filteredData = data.filter((member) => Object.keys(member).length > 0);
        
            setJoinedMembers(filteredData); // 로드된 데이터를 상태에 설정합니다.
        } catch (error) {
            console.error('회원 데이터 로딩 중 오류:', error);
        }
    };

    //booking 업데이트
    const updateBooking = useCallback((reservationData)=>{
        const updatedBookingData = {
            ...booking_data,
            JEJU: [...booking_data.JEJU, reservationData],
        };
        setBooking(updatedBookingData);
        console.log("Updated Booking Data: ", updatedBookingData);
    },[booking, setBooking]);

    // createContext에 쓰일 value
    const value = useMemo(() => ({
        updateBooking, loginInfo, isLogged, setIsLogged
    }), [updateBooking, loginInfo, isLogged, setIsLogged]);

    return(
    <ContextData.Provider value={value}>
        <Layout
            // loginInfo={loginInfo}
            isLogged={isLogged}
            setIsLogged={setIsLogged}>
            <Routes>
            <Route 
                path="/menupage"  
                element={
                    [
                        <MenuPage/>
                    ]
                }>
            </Route>
            <Route
                path="/brand_intro"
                element={[<BrandIntro />]}/>
                <Route
                    path="/"
                    element={
                        [
                            <Main_page
                                // loginInfo={loginInfo}
                            />
                        ]
                    }>
                </Route>
                <Route
                    path="/store"
                    element={
                        [
                            <Map></Map>
                        ]
                    }>
                </Route>
                <Route
                    path="/booking"
                    element={
                        [
                            <Booking
                                // loginInfo={loginInfo}
                            />
                        ]
                    }>
                </Route>  
                <Route
                    path="/login"
                    element={
                        <LoginForm 
                            joinedMembers={joinedMembers}
                            setJoinedMembers={setJoinedMembers}
                            // loginInfo={loginInfo}
                            setLoginInfo={setLoginInfo}
                            isLogged={isLogged}
                            setIsLogged={setIsLogged}/>

                    }>
                </Route>                           
                <Route
                    path="/searchID"
                    element={
                        <SearchID
                        joinedMembers={joinedMembers}
                        setJoinedMembers={setJoinedMembers}
                        // loginInfo={loginInfo}
                        setLoginInfo={setLoginInfo}/>
                    }>
                </Route>                           
                <Route
                    path="/register"
                    element={
                        <Register 
                            joinedMembers={joinedMembers} 
                            setJoinedMembers={setJoinedMembers} />
                    }>
                </Route>
                <Route
                    path="/myPage"
                    element={
                        <MyPage  
                            joinedMembers={joinedMembers} 
                            setJoinedMembers={setJoinedMembers}
                            loginInfo={loginInfo}
                            setLoginInfo={setLoginInfo}/>
                    }>
                </Route>   
                <Route
                    path="/infoEdit"
                    element={
                        <InfoEdit  
                            joinedMembers={joinedMembers} 
                            setJoinedMembers={setJoinedMembers}
                            loginInfo={loginInfo}
                            setLoginInfo={setLoginInfo}/>
                    }>
                </Route>        
            </Routes>
        </Layout>
    </ContextData.Provider>   
    )
}
export default App;