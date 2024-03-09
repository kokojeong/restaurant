import React, { useEffect } from "react";

export default function Navigation(props){

    //성현
    const{scrolled, setScrolled, handleScroll}=props;

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

  //혜정
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
        mainNavSlideBack.style.transition = 'transform 1s ease';
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
        mainNavSlideBack.style.height = isHovering ? '54px' : '0';
        mainNavSlideBack.style.transition = 'height 0.3s ease';
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
  
  return(
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
                        <p className="hover2">
                            <a href="#">Brand</a>
                            <div className="main_nav_select"></div>
                        </p>
                        <div className="main_nav_select"></div>
                        <ul className="gnb2">
                            <li><a href="#">브랜드소개</a></li>
                            <li><a href="#">쉐프소개</a></li>
                        </ul>
                    </li>
                    <li>
                        <p className="hover3">
                            <a href="#">Store</a>
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
                </ul>
            </nav>
        </div>
        <div className="main_nav_slide_back"></div>            
    </header>
  )
}