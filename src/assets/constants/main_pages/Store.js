import React from "react";

function Store(props){
    const {isHovered, handleMouseEnter, handleMouseLeave}=props;

    return(
        <section id="main_sect04_store">
            <div className={`main_store_bg ${isHovered ? 'hovered' : ''}`}></div>
            <div className="main_store_wrap">
                <div className="store_head">               
                    <h2>STORE</h2>
                    <p>각 지점별로 특별한 AGUCCIM을 만나보세요</p>            
                </div>
                <div>
                    <figure 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <a href="#"></a>
                        <figcaption>
                                <p>서울 지점</p>
                                <p>AGUCCIM in 서울</p>
                        </figcaption>    
                    </figure>
                    <figure>
                        <a href="#"></a>
                        <figcaption>
                                <p>부산 지점</p>
                                <p>AGUCCIM in 부산</p>   
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="#"></a>
                        <figcaption>
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