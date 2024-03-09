import React from "react";
import "../../assets/styles/footer.css";

function Footer(){
    return(
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
    )
}
export default Footer;