import React, { useContext, useEffect,useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../../assets/styles/navigation.css";
import { ContextData } from "../../App";




export default function Navigation(props){  
  const location = useLocation();
  const { loginInfo } = useContext(ContextData); 
  
  const {isLogged, setIsLogged} = props;
  const [scrolled, setScrolled] = useState(false);
  
  
  useEffect(() => {
    // 메인 페이지에서만 1초 후에 로고가 왼쪽 상단으로 이동하도록 타임아웃 설정
    if (location.pathname === '/') {
      const timeout = setTimeout(() => {
        // 로고를 왼쪽 상단으로 이동하도록 scrolled 상태 업데이트
        setScrolled(true);
      }, 1000); // 1000 밀리초 = 1초

      return () => clearTimeout(timeout); // 언마운트 시 타임아웃 제거
    } else {
      // 다른 페이지에서는 항상 true로 설정하여 가운데에 위치하도록 유지
      setScrolled(true);
    }
  }, [location.pathname]);



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

      // opacity 효과

    const mainHeader = qs('#main_header');
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      mainHeader.style.opacity = location.pathname === "/" ? (currentScrollY > lastScrollY ? "0.5" : "1") : "1";
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  //opacity 효과

  const navigate = useNavigate();

  const gohome = () => {
    navigate('/');
  }
  const goreservation = () => {
    navigate('/booking');
  }
  const gostore = () => {
    navigate('/store');
  }
  const gomenu = () => {
    navigate('/menuPage')
  }
  const gobrand = () => {
    navigate('/brand_intro');
  }
  const handleLogoutClick = () => {
    if (isLogged) {
      // 여기에서 로그아웃에 필요한 로직을 추가하면 됩니다.
  
      // 로그아웃 후 새로고침하여 홈으로 이동
      navigate('/');
      window.location.reload();
    } else {
      // 이미 로그인된 상태가 아니라면 로그인 화면으로 이동
      navigate('/login');
    }
  };
  const handleMyPageClick = () => {
    if (isLogged) {
      // 이미 로그인된 상태이면 회원가입 화면으로 이동
      navigate('/myPage');
    } else {
      // 로그인되지 않은 상태이면 홈 화면으로 이동
      navigate('/register');
    }
  };
  return(
    <>
    <header id="main_header">
          <div id="header_out_box">
                <div className="nav_logo">
                <div
                className={`Logo ${scrolled && location.pathname === '/' ? 'fixed' : 'no-transition'}`}
                style={{
                    fontSize: `${scrolled ? '2em' : '272px'}`,
                    top: `${scrolled ? '50px' : '50%'}`,
                    left: `${scrolled ? '350px' : '53.5%'}`                        
                }}
            >
                    <h1><a href="#" onClick={gohome}>AGUCCIM</a></h1>
                  </div>
                </div>        
                <nav className="main_nav">
                    <ul>
                        <li>
                            <p className="hover1">
                                <a href="#" onClick={gomenu}>Menu</a>
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
                                <a href="#" onClick={gobrand}>Brand</a>
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
                                <a href="#" onClick={gostore}>Store</a>
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
                        <div className="main_nav_line"></div> 
                    </ul>                   
                </nav>
              <div className="sub_nav">
                <div className="reserbox">
                  <p className="main_nav_reservation_back">
                    <a className="main_nav_reservation" href="#" onClick={goreservation}>
                    Reservation</a>  
                    <div className="main_nav_select1"></div> 
                  </p>
                  <div className="main_nav_select1"></div>
                </div>
                <ul>                
                  <li>
                      <a href="#" onClick={handleLogoutClick}>
                      {isLogged ? "로그아웃" : "로그인"}
                      </a>
                  </li>
                    <li>
                      <a href="#" onClick={handleMyPageClick}>
                      {isLogged ? "마이페이지" : "회원가입"}
                      </a>
                    </li>
                </ul>
              </div>
          </div>
            <div className="main_nav_slide_back"></div>            
      </header>
        
    </>
  )
}