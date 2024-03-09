import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Store(props){
    const {isHovered,handleMouseEnter,handleMouseLeave}=props;
    const navigate = useNavigate();
    const gostore = () => {
        navigate('/store')
    }
    return(
        <section id="main_sect04_store">
            <div className={`main_store_bg ${isHovered? 'hovered':''}`}></div> 
            <div className="main_store_wrap">
                <div className="store_head">               
                    <h2>STORE</h2>
                    <p>각 지점별로 특별한 AGUCCIM을 만나보세요</p>            
                </div>
                <div>
                    <figure onClick={gostore}>
                        <a href="#" className="Seoul"></a>
                        <figcaption
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                                <p>서울 지점</p>
                                <p>AGUCCIM in 서울</p>
                        </figcaption>
                    </figure>
                    <figure onClick={gostore}>
                        <a href="#" className="Busan"></a>
                        <figcaption
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                                <p>부산 지점</p>
                                <p>AGUCCIM in 부산</p>   
                        </figcaption>
                    </figure>
                    <figure onClick={gostore}>
                        <a href="#" className="Jeju"></a>
                        <figcaption
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                                <p>제주 지점</p>
                                <p>AGUCCIM in 제주</p>
                        </figcaption>
                    </figure>
                </div> 
            </div>                  
        </section>
    )
}
export default Store;