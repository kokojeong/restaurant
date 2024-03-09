import React from "react";

import "./assets/styles/default_style.css"
import "./assets/styles/app_01.css"

function App(){
    
    return(
        <>
        <header id="main_header">
            <div id="header_out_box">
                <div className="nav_logo">
                    <h1><a href="#">AGUCCIM</a></h1>
                </div>        
                <nav className="main_nav">
                    <ul>
                        <li>
                            <p>
                                <a href="#">Menu</a>
                                <div className="main_nav_select"></div>
                            </p>
                            <ul>
                                <li><a href="#">스테이크</a></li>
                                <li><a href="#">샐러드</a></li>
                                <li><a href="#">음료수</a></li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <a href="#">Brand</a>
                                <div className="main_nav_select"></div>
                            </p>
                            <div className="main_nav_select"></div>
                            <ul>
                                <li><a href="#">브랜드소개</a></li>
                                <li><a href="#">쉐프소개</a></li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <a href="#">Store</a>
                                <div className="main_nav_select"></div>
                            </p>
                            <div className="main_nav_select"></div>
                            <ul>
                                <li><a href="#">서울지점</a></li>
                                <li><a href="#">부산지점</a></li>
                                <li><a href="#">제주도지점</a></li>
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
        <section id="main_sect03_banner">
            <div className="main_slide_banner_wrap">
                <div className="main_slide_banner">
                    <ul className="slides">
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                        <li>
                            <img src="http://placehold.it/1000x550" alt=""/>
                        </li>                        
                    </ul>
                    <div className="main_slide_banner_button">
                        <div className="prev"></div>
                        <div className="next"></div>
                    </div>
                </div>                
            </div>
        </section>
        <section id="main_sect02_signature">
            <div className="signature_head">
                <h2>SIGNATURE</h2>
                <p>AGUCCIM의 시그니처 메뉴를 만나보세요.</p>
            </div>                
            <div className="signature_menu">
                <ul>
                    <li>
                        <h2>메뉴1</h2>
                    </li>
                    <li>
                        <h2>메뉴2</h2>
                    </li>
                    <li>
                        <h2>메뉴3</h2>
                    </li>
                    <li>
                        <h2>메뉴4</h2>
                    </li>
                    <li>
                        <h2>메뉴 더보기</h2>
                        <div></div>
                    </li>
                </ul>
            </div>
            <div className="signature_contents">
                <figure>
                    <figcaption>
                        <p>스테이크가 먹고 싶다 보건아 스테이크 사주라. 채끝으로.</p>
                    </figcaption>
                    <img src="http://placehold.it/900x478" alt=""/>
                </figure>
                <figure>
                    <figcaption>
                        <p>스테이크가 먹고 싶다 보건아 스테이크 사주라. 채끝으로.</p>
                    </figcaption>
                    <img src="http://placehold.it/900x478" alt=""/>
                </figure>
                <figure>
                    <figcaption>
                        <p>스테이크가 먹고 싶다 보건아 스테이크 사주라. 채끝으로.</p>
                    </figcaption>
                    <img src="http://placehold.it/900x478" alt=""/>
                </figure>
                <figure>
                    <figcaption>
                        <p>스테이크가 먹고 싶다 보건아 스테이크 사주라. 채끝으로.</p>
                    </figcaption>
                    <img src="http://placehold.it/900x478" alt=""/>
                </figure>                    
            </div>                
        </section>
        <section id="main_sect04_store">
            <div className="main_store_bg">
                <div className="main_store_wrap">
                    <div className="store_head">               
                        <h2>STORE</h2>
                        <p>각 지점별로 특별한 AGUCCIM을 만나보세요</p>            
                    </div>
                    <div>
                        <figure>
                            <a href="#">
                                {/* <img src="http://placehold.it/426x538" alt=""/> */}
                            </a>
                            <figcaption>
                                    <p>서울 지점</p>
                                    <p>AGUCCIM in 서울</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <a href="#">
                                {/* <img src="http://placehold.it/426x538" alt=""/> */}
                            </a>
                            <figcaption>
                                    <p>부산 지점</p>
                                    <p>AGUCCIM in 부산</p>   
                            </figcaption>
                        </figure>
                        <figure>
                            <a href="#">
                                {/* <img src="http://placehold.it/426x538" alt=""/> */}
                            </a>
                            <figcaption>
                                    <p>제주 지점</p>
                                    <p>AGUCCIM in 제주</p>
                            </figcaption>
                        </figure>
                    </div> 
                </div>
            </div>               
        </section>
        <section id="main_sect05_sub_banner">
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
            <img src="http://placehold.it/150x150" alt=""/>
        </section>
        <div id="top_btn">
            <a href="#">
                <p>TOP</p>
                <div>화살표</div>
            </a>
        </div>
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