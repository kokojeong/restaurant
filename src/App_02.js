import React, {useState, useEffect, useCallback, useRef} from "react";

// import img1 from "./assets/images/img1.jpg"
// import img2 from "./assets/images/img2.jpg"
// import img3 from "./assets/images/img3.jpg"
// import img4 from "./assets/images/img4.jpg"
// import img5 from "./assets/images/img5.jpg"

import steak1 from "./assets/images/steak1.jpg";
import steak2 from "./assets/images/steak2.jpg";
import steak3 from "./assets/images/steak3.jpg";
import steak4 from "./assets/images/steak4.jpg";

import "./assets/styles/default_style.css"
import "./assets/styles/app_02.css"

import EventBanner from "./components/Main_page/EventBanner"
import FamilySection from "./components/Main_page/FamilySection"
import Store from "./assets/constants/main_pages/Store";

// const imgArr=[
//     {img:img1, key:1},
//     {img:img2, key:2},
//     {img:img3, key:3},
//     {img:img4, key:4},
//     {img:img5, key:5}
// ];

//useInterval Hook
// const useInterval=(callback, interval) => {
//     const savedCallback = useRef(null);
//     useEffect(() => {
//         savedCallback.current = callback;
//     }, [callback]);
//     useEffect(() => {
//         function tick() {
//             if (savedCallback.current) {
//                 savedCallback.current();
//             }
//         }
//         if (interval !== null && interval !== 10000000) {
//         let id = setInterval(tick, interval);
//         return () => clearInterval(id);
//         }
//     }, [interval]);
// };

function App(){
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
        // 1초 후에 로고가 왼쪽 상단으로 이동하도록 타임아웃 설정
        const timeout = setTimeout(() => {
            // 로고를 왼쪽 상단으로 이동하도록 scrolled 상태 업데이트
            setScrolled(true);
        }, 1000); // 1000 밀리초 = 1초

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

    //보건
    //호버 효과
     //호버 효과
    useEffect(() => {
        const qs = (selector) => document.querySelector(selector);
        const mainNavSlideBack = qs('.main_nav_slide_back');
        const mainGnbs = ['.gnb1', '.gnb2', '.gnb3'];
        const mainNavs = ['.hover1', '.hover2', '.hover3'];

        const handleHover = (index, isHovering) => {
            const gnbElement = qs(mainGnbs[index]);
            const aTags = gnbElement.querySelectorAll('.gnb1 > li > a');
            const bTags = gnbElement.querySelectorAll('.gnb2 > li > a');
            const cTags = gnbElement.querySelectorAll('.gnb3 > li > a');
            // gnbElement에 대한 트랜지션 설정
            gnbElement.style.transition = 'max-height 0.3s ease';
            // a 태그에 대한 트랜지션 설정
            aTags.forEach((aTag) => {
                aTag.style.transition = 'opacity 0.5s ease';
            });
            bTags.forEach((bTag) => {
                bTag.style.transition = 'opacity 0.5s ease';
            });
            cTags.forEach((cTag) => {
                cTag.style.transition = 'opacity 0.5s ease';
            });
            // mainNavSlideBack에 대한 트랜지션 설정
            mainNavSlideBack.style.transition = 'transform 0.2s ease';
            // gnbElement의 max-height 및 opacity 설정
            setTimeout(() => {
                gnbElement.style.maxHeight = isHovering ? '300px' : '0';
                // aTags에 대한 opacity 설정
                aTags.forEach((aTag) => {
                    aTag.style.opacity = isHovering ? 1 : 0;
                });
                // bTags에 대한 opacity 설정
                bTags.forEach((bTag) => {
                    bTag.style.opacity = isHovering ? 1 : 0;
                });
                // cTags에 대한 opacity 설정
                cTags.forEach((cTag) => {
                    cTag.style.opacity = isHovering ? 1 : 0;
                });
            }, 70);
            // mainNavSlideBack의 transform 설정
            mainNavSlideBack.style.transform = isHovering ? 'translateY(0)' : 'translateY(-54px)';
            gnbElement.style.display = isHovering ? 'flex' : 'none';
        };

        mainNavs.forEach((mainNav, index) => {
            qs(mainNav).addEventListener('mouseenter', () => handleHover(index, true));
            qs(mainNav).addEventListener('mouseleave', () => handleHover(index, false));
            qs(mainGnbs[index]).addEventListener('mouseenter', () => handleHover(index, true));
            qs(mainGnbs[index]).addEventListener('mouseleave', () => handleHover(index, false));
        });
        //opacity 효과
        const mainHeader = qs('#main_header');
        let lastScrollY = 0;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            mainHeader.style.opacity = currentScrollY > lastScrollY ? "0.5" : "1";
            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    //opacity 효과

    //민정, 소윤
    // const [slideIndex, setSlideIndex]=useState(1);
    // const [slideInterval, setSlideInterval]=useState(3000);
    // const slideRef=useRef(null);

    // const IMG_NUM=imgArr.length;
    // const beforeSlide=imgArr[IMG_NUM-1];
    // const afterSlide=imgArr[0];

    // let slideArr=[beforeSlide,...imgArr,afterSlide];
    // const SLIDE_NUM=slideArr.length;

    // useInterval(()=>setSlideIndex((prev)=>prev+1),slideInterval);

    // const InfiniteSlideHandler=(idx)=>{
    //     setTimeout(()=>{
    //         if(slideRef.current){
    //             slideRef.current.style.transition='';
    //         }
    //         setSlideIndex(idx);
    //         setTimeout(()=>{
    //             if(slideRef.current){
    //                 slideRef.current.style.transition='all 500ms ease-in-out';
    //             }
    //         },100);
    //     },500);
    // };

    // if(slideIndex===SLIDE_NUM-1){
    //     InfiniteSlideHandler(1);
    // }

    // if(slideIndex===0){
    //     InfiniteSlideHandler(IMG_NUM);
    // }

    // const intervalHandler=()=>{
    //     if(slideIndex===SLIDE_NUM-1){
    //         setSlideInterval(500);
    //     }else{
    //         setSlideInterval(3000);
    //     };
    // };

    // const handleSlide=(direction)=>{
    //     setSlideIndex((prev)=>prev+direction);
    // };

    // const stopAutoSlide=()=>{
    //     setSlideInterval(10000000);
    // }; 

    //진서
    const [selectedMenu, setSelectedMenu] = useState(0);    

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const menuItems = ["메뉴1", "메뉴2", "메뉴3", "메뉴4"];

    const contentData = [
        { text: "스테이크가 먹고 싶다 보건아 스테이크 사주라. 채끝으로.", imageUrl:steak1 },
        { text: "샐러드 설명", imageUrl:steak2 },
        { text: "음료수 설명", imageUrl: steak3 },
        { text: "메뉴4 설명", imageUrl:steak4 },
    ];

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
        <header id="main_header">
            <div id="header_out_box">
            <div className="nav_logo">
                <div
                    className={`Logo ${scrolled ? 'fixed' : ''}`}
                    style={{
                        fontSize: `${scrolled ? '50px' : '750px'}`,
                        top: `${scrolled ? '50px' : '50%'}`,
                        left: `${scrolled ? '350px' : '54%'}`                        
                    }}
                >
                    <a href="#">AGUCCIM</a>
                </div>
            </div>       
                <nav className="main_nav">
                    <ul>
                        <li>
                            <p className="hover1">
                                <a href="#">Menu</a>
                                <div className="main_nav_select"></div>
                            </p>
                            <ul className="gnb1">
                                <li><a href="#">스테이크</a></li>
                                <li><a href="#">샐러드</a></li>
                                <li><a href="#">음료수</a></li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <a href="#" className="hover2">Brand</a>
                                <div className="main_nav_select"></div>
                            </p>
                            <div className="main_nav_select"></div>
                            <ul className="gnb2">
                                <li><a href="#">브랜드소개</a></li>
                                <li><a href="#">쉐프소개</a></li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <a href="#" className="hover3">Store</a>
                                <div className="main_nav_select"></div>
                            </p>
                            <div className="main_nav_select"></div>
                            <ul className="gnb3">
                                <li><a href="#">서울지점</a></li>
                                <li><a href="#">부산지점</a></li>
                                <li><a href="#">제주도지점</a></li>
                                {/* 호버 효과 및 클래스 추가 */}
                            </ul>
                        </li>
                        <li>
                            <p className="main_nav_reservation_back">
                                <a className="main_nav_reservation" href="#">Reservation</a>  
                                <div className="main_nav_select"></div> 
                            </p>
                            <div className="main_nav_select"></div>
                        </li>
                        <div className="main_nav_line"></div> 
                    </ul>                   
                </nav>

                <nav className="sub_nav">
                    <ul>                        
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">회원가입</a></li>
                        <li><a href="#">language</a></li>                        
                    </ul>
                </nav>
            </div>
            <div className="main_nav_slide_back"></div>            
        </header>
        <section id="main_sect01_video">
            <video className="background_video" autoplay loop muted>
                <source src="/main_sect_video.mp4" type="video/mp4"/>   
            </video>
        </section>
        <div className="back_gradient"></div>
        <EventBanner></EventBanner>
        {/* <section id="main_sect03_banner">
            <div className="main_slide_banner_wrap">
                <div className="main_slide_banner">
                    <ul className="slides"
                        style={{
                            width:`${(1000+30)*SLIDE_NUM}px`,
                            transition:"all 500ms ease-in-out",
                            transform:`translateX(${-1*((100/SLIDE_NUM)*slideIndex)}%)`
                        }}
                        ref={slideRef}
                    >
                        {
                            slideArr.map((item,idx)=>(
                                <li key={idx}>
                                    <img 
                                        src={item.img} 
                                        alt={item.key}
                                    />
                                </li>
                            ))
                        }                        
                    </ul>
                    <div className="main_slide_banner_button">
                        <div 
                            className="prev"
                            onMouseEnter={stopAutoSlide}
                            onMouseLeave={intervalHandler}
                            onClick={()=>handleSlide(-1)}></div>
                        <div className="next"
                            onMouseEnter={stopAutoSlide}
                            onMouseLeave={intervalHandler}
                            onClick={()=>handleSlide(+1)}></div>
                    </div>
                </div>                
            </div>
        </section> */}
        <div id="main_sect02_wrap">
            <section id="main_sect02_signature">
                <div className="signature_head">
                    <h2>SIGNATURE</h2>
                    <p>AGUCCIM의 시그니처 메뉴를 만나보세요.</p>
                </div>
                <div className="signature_menu">
                    <ul>
                        {menuItems.map((item, index) => (
                        <li key={index}>
                            <h2 onClick={() => handleMenuClick(index)}>{item}</h2>
                        </li>
                        ))}
                        <li>
                        <h2>메뉴 더보기</h2>
                        </li>
                    </ul>
                </div>
                <div className="signature_contents">
                    {contentData.map((item, index) => (
                        <figure
                        key={index}
                        style={{
                            transform: `translateY(${(index - selectedMenu) * 100}%)`,
                        }}
                        >
                        <figcaption>
                            <p>{item.text}</p>
                        </figcaption>
                        <img src={item.imageUrl} alt="" />
                        </figure>
                    ))}
                </div>
            </section>
        </div>
        <Store isHovered={isHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}></Store>
        <FamilySection></FamilySection>
        {/* <section id="main_sect05_sub_banner">
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
        </section> */}
        {showTopButton && (
        <div id="top_btn" onClick={handleTopButtonClick} className={scrolled ? "visible" : ""}>
            <a href="#">
                <p>TOP</p>
                <div>화살표</div>
            </a>
        </div>
        )}
        <footer id="main_footer">
            <div id="main_footer_sect01_site_map">
                <div className="site_map_wrap">
                    <p>사이트맵</p>
                    <button type="button" className="site_map_toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div id="main_footer_sect02_contents">                
                <div id="main_footer_sect02_inbox1">                    
                    <div className="inbox1_head">
                        <h2>AGUCCIM</h2>
                    </div>
                    <div className="inbox1_address">
                        <ul>
                            <li>
                                <p>주소</p>
                                <ul>
                                    <li>서울지점 : 서울특별시 종로구 ~~</li>
                                    <li>부산지점 : 부산광역시 영도구 ~~</li>
                                    <li>제주지점 : 제주특별자치도 제주시 ~~</li>
                                </ul>
                            </li>
                            <li>
                                <p>영업시간</p>
                                <ul>
                                    <li>화요일~일요일 : AM11:00 - PM09:00</li>
                                    <li>화요일~일요일 : AM11:00 - PM09:00</li>
                                    <li>화요일~일요일 : AM11:00 - PM09:00</li>
                                </ul>
                            </li>
                            <li>
                                <p>연락받는곳</p>
                                <ul>
                                    <li>02-000-0000</li>
                                    <li>051-000-0000</li>
                                    <li>064-000-0000</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="inbox1_copy">
                        <p>개인정보 관리책임자 : 마케팅팀 서보건 Webmaster_gun@naver.com</p>
                        <p>Copyright &copy; Seoulland. All rights reserved.</p>
                    </div>
                </div>
                <div id="main_footer_sect02_inbox2">
                    <div className="inbox2_nav">
                        <ul>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인정보처리방침</a></li>
                            <li><a href="#">인재채용</a></li>
                            <li><a href="#">제휴문의</a></li>
                            <li className="inbox2_nav_CS">
                                <a href="#">고객센터</a>
                                <ul>
                                    <li><a href="#">공지사항</a></li>
                                    <li><a href="#">자주묻는질문</a></li>
                                    <li><a href="#">1:1문의</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="inbox2_sns">
                        <a href="#">faceBook</a>
                        <a href="#">instagram</a>
                        <a href="#">twitter</a>
                        <a href="#">youtube</a>
                    </div>
                    <div className="inbox2_family">
                        <select name="family_site">
                            <option hidden selected>패밀리사이트</option>
                            <option><a href="#">family_site 01</a></option>
                            <option><a href="#">family_site 02</a></option>
                            <option><a href="#">family_site 03</a></option>
                            <option><a href="#">family_site 04</a></option>
                            <option><a href="#">family_site 05</a></option>
                            
                        </select>
                    </div>                        
                </div>                     
            </div>
        </footer>
        </>
    )
}
export default App;