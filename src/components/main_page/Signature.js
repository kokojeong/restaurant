import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import steak1 from "../../assets/images/steak1.jpg";
import steak2 from "../../assets/images/steak2.jpg";
import steak3 from "../../assets/images/steak3.jpg";
import steak4 from "../../assets/images/steak4.jpg";
import arrow from "../../assets/images/rightarrow.png";


const menuItems = ["메뉴1", "메뉴2", "메뉴3", "메뉴4"];

const contentData = [
    { text: "환상적인 스테이크 A급 양질 의 부드러운 육질", imageUrl:steak1 },
    { text: "부드러운 닭 가슴살 웨지감자와 함께", imageUrl:steak2 },
    { text: "두툼한 채끝 스테이크", imageUrl: steak3 },
    { text: "아구찜 만의 특별한 소스를 입힌 버팔로 윙", imageUrl:steak4 },
];

function Signature(props){
    const { isHoveredS, setIsHoveredS, selectedMenu, handleMenuClick } = props;
    const navigate = useNavigate();
    const gomenu = () => {
        navigate('/menuPage')
    }
    return(
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
                    <li
                        onMouseEnter={() => setIsHoveredS(true)}
                        onMouseLeave={() => setIsHoveredS(false)}
                    >
                        {/* <h2>{isHoveredS ? '---------->메뉴더보기' : '메뉴 더보기'}</h2> */}
                        {isHoveredS ? (
                                <h2 className="menu_container">
                                    <div className="line"></div>
                                    <img src={arrow} alt="메뉴 더보기"/>
                                    <h2 className="menu_plus" onClick={gomenu}>메뉴 더보기</h2>
                                </h2>
                        ) : (
                            <h2 className="menu_plus" onClick={gomenu}>메뉴 더보기</h2>
                        )}
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
    )
}
export default Signature;