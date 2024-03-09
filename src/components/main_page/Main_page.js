import React, {useState, useEffect, useCallback,} from "react";
import "../../assets/styles/main_page.css"

import Event_banner from "./Event_banner";
import Signature from "./Signature";
import Store from "./Main_page_store";
import Family_section from "./Family_section";



function Main_page(){
    // const location = useLocation(); 
    //성현
    // 스크롤 여부를 추적하는 상태 변수
    const [scrolled, setScrolled] = useState(false);    
    // TOP 버튼 표시 여부를 추적하는 상태 변수
    const [showTopButton, setShowTopButton] = useState(false);

    // 스크롤 이벤트 처리 함수
    const handleScroll = useCallback(() => {
        // 스크롤 위치가 800 이상인 경우 TOP 버튼을 표시함
        if (window.scrollY > 800) {
            setShowTopButton(true);
        } else {
            // 스크롤 위치가 800 미만인 경우 TOP 버튼을 숨김
            setShowTopButton(false);
        }
    }, []);    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScrolled(true);
        },); 
        // 스크롤 이벤트를 사용해서 handleScroll 함수를 호출후 showTopButton 상태 업데이트
        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeout); // 타임아웃 제거함
            window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 제거
        };
    }, [handleScroll]);
    // TOP 버튼 클릭 시 페이지 상단으로 스크롤하는 함수
    const handleTopButtonClick = () => {
        // 부드러운 스크롤 효과로 페이지 상단으로 스크롤
        window.scrollBy({ top: -window.scrollY, behavior: 'smooth' });
    };

    //진서
    const [selectedMenu, setSelectedMenu] = useState(0); 
    const [isHoveredS, setIsHoveredS] = useState(false);   

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };    
    

    //민정
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <>
            <section id="main_sect01_video">
                <video className="background_video" autoPlay loop muted>
                    <source src="/main_sect_video.mp4" type="video/mp4"/>   
                </video>
            </section>
            <div className="back_gradient"></div>
            <Event_banner></Event_banner>
            <Signature
                isHoveredS={isHoveredS}
                setIsHoveredS={setIsHoveredS}
                selectedMenu={selectedMenu}
                handleMenuClick={handleMenuClick}>
            </Signature>
            <Store isHovered={isHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}></Store>
            <Family_section></Family_section>
            {showTopButton && (
                <div id="top_btn" onClick={handleTopButtonClick} className={scrolled ? "visible" : ""}>
                    <a href="#">
                        <p>TOP</p>
                        <div>화살표</div>
                    </a>
                </div>
            )}
        </>
    )
}
export default Main_page;