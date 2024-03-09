import React, {useState} from "react";
import "../../assets/styles/booking.css"

function Booking_table(props){
    const {table, handle_table} = props;
    const [hovered_zone, set_hovered_zone] = useState(null);

    // const zone_hover = (zoneType) => {
    //     set_hovered_zone(zoneType);
    //     // table_img_wrap의 자식들에 클래스 추가
    //     const tableImgWrap = document.querySelector('.table_img_wrap');
    //     if (tableImgWrap) {
    //         const children = tableImgWrap.children;
    //         for (let i = 0; i < children.length; i++) {
    //             children[i].classList.add(`${zoneType}${i+1}`);
    //         }
    //     }
    // };

    // const zone_leave = () => {
    //     if (hovered_zone) {
    //       // table_img_wrap의 자식들에 클래스 제거
    //     const tableImgWrap = document.querySelector('.table_img_wrap');
    //     if (tableImgWrap) {
    //         const children = tableImgWrap.children;
    //         for (let i = 0; i < children.length; i++) {
    //             children[i].classList.remove(`${hovered_zone}${i+1}`);
    //         }
    //     }
    //     set_hovered_zone(null);
    //     }
    // };

    const zone_hover = (zoneType) => {
        clearTimeout(zone_hover.hoverTimeout);
        zone_hover.hoverTimeout = setTimeout(() => {
            set_hovered_zone(zoneType);    
            const tableImgWrap = document.querySelector('.table_img_wrap');
            if (tableImgWrap) {
                const children = tableImgWrap.children;
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.add(`${zoneType}${i + 1}`);
                    children[i].style.opacity = 1;
                }
            }
        }, 700); // 700 밀리초(0.7초) 딜레이
    };
    
    const zone_leave = () => {
        clearTimeout(zone_hover.hoverTimeout);
    
        if (hovered_zone) {
            const tableImgWrap = document.querySelector('.table_img_wrap');
            if (tableImgWrap) {
                const children = tableImgWrap.children;
                for (let i = 0; i < children.length; i++) {
                    setTimeout(()=>{
                        children[i].classList.remove(`${hovered_zone}${i + 1}`);
                        children[i].style.opacity = 0;
                    }, 300)                    
                }
            }
            set_hovered_zone(null);
        }
    };

    // const zone_leave = () => {
    //     clearTimeout(zone_hover.hoverTimeout);
    
    //     const tableImgWrap = document.querySelector('.table_img_wrap');
    //     if (tableImgWrap) {
    //         setTimeout(() => {
    //             tableImgWrap.classList.remove('zone-hovered');
    //         }, 500); // 딜레이 추가
    //     }
    
    //     set_hovered_zone(null);
    // };

    const zone_click=(e)=>{
        handle_table(e);
    };    

    return(
        <div id="booking_table_box">
            <div className="booking_table_header">
                <p>STEP 4</p>
                <h3>테이블 선택</h3>
            </div>
            <div className="booking_contents_wrap">  
                <ul className="booking_table_info">
                    <li>
                        step2에서 선택한 인원 수 만큼 예약금이 부여됩니다.
                    </li>
                    <li>
                        테라스석은 기상에 따라 운영중지 될 수 있습니다.<br/>
                        &#40;기상에 따른 취소는 100% 환불됩니다.&#41;
                    </li>
                    <li>룸은 4인 이상부터 예약이 가능합니다.</li>
                    <li>룸의 예약금은 인원수와 관계없이 책정됩니다.</li>
                    <li>
                        2인 이하로 룸 예약 시, 식사 후 현장에서 결제되는 금액에서 추가금액이 발생합니다.<br/>
                        (룸 이용 금액 추가, 자세한 내용은 해당 매장으로 문의하십시오.)
                    </li>
                </ul>                
                <div className="booking_table_zone">
                    <div 
                        className={`zone hole_bg ${table === 'hole' ? 'checked' : ''} ${hovered_zone === 'hole' ? 'hovered' : ''}`}
                        onMouseEnter={()=>zone_hover('hole_imgs')}
                        onMouseLeave={zone_leave}  
                        onClick={()=>zone_click('hole')}>
                        <p>Hole</p>
                        <p>홀</p>
                        <p>1인 4,500원</p>
                    </div>
                    <div 
                        className={`zone ocean_bg ${table === 'ocean' ? 'checked' : ''} ${hovered_zone === 'ocean' ? 'hovered' : ''}`}  
                        onMouseEnter={()=>zone_hover('ocean_imgs')}
                        onMouseLeave={zone_leave} 
                        onClick={()=>zone_click('ocean')}>
                        <p>Ocean</p>
                        <p>오션뷰</p>
                        <p>1인 7,500원</p>
                    </div>
                    <div 
                        className={`zone terrace_bg ${table === 'terrace' ? 'checked' : ''} ${hovered_zone === 'terrace' ? 'hovered' : ''}`}
                        onMouseEnter={()=>zone_hover('terrace_imgs')}
                        onMouseLeave={zone_leave} 
                        onClick={()=>zone_click('terrace')}>
                        <p>Terrace</p>
                        <p>테라스</p>
                        <p>1인 7,500원</p>
                    </div>
                    <div 
                        className={`zone room_bg ${table === 'room' ? 'checked' : ''} ${hovered_zone === 'room' ? 'hovered' : ''}`} 
                        onMouseEnter={()=>zone_hover('room_imgs')} 
                        onMouseLeave={zone_leave}
                        onClick={()=>zone_click('room')}>
                        <p>Room</p>
                        <p>룸</p>
                        <p>30,000원</p>
                    </div>
                    <div className="table_img_wrap">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Booking_table;