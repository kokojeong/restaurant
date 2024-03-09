import React, {useState,useMemo, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/booking.css";

import Booking_side from "./Booking_side";
import Booking_store from "./Booking_store";
import Booking_person from "./Booking_person";
import Booking_date from "./Booking_date";
import Booking_time from "./Booking_time";
import Booking_table from "./Booking_table";

//구역 별 1인당 예약가격
const tmp1 = {table : 'hole', price: 4500};
const tmp2 = {table : 'ocean terrace', price: 7500};
const tmp3 = {table : 'room', price: 30000};
const initial_jeju_price = [tmp1, tmp2, tmp3];

function Booking(){
    
    //보건파트
    const [selectstore, setSelectstore] = useState(null); // JEJU, SEOUL, BUSAN
    const [selectperson, setSelectperson] = useState(null);
    const [selectdate, setSeledate] = useState(null);
    const [selecttime, setSeletime] = useState(null);
    const [selecttime2, setSeletime2] = useState(null);

    const [selectedLocation, setSelectedLocation] =useState('');

    //민정파트  
    const [table, set_table] = useState(''); // 테이블 구역 --> hole, ocean, terrace, room
    const [price, set_price] = useState(0);
    //테이블 별 예약은 나중에 해볼께요... 미안해 ㅠ

    const location = useLocation();
    const initialSelectedStore = useMemo(() => {
        // 예약 페이지로 직접 접근할 때와 지도에서 예약하러 가기 버튼을 눌러올 때를 구분
        const query = new URLSearchParams(location.search);
        const selectedStoreFromQuery = query.get("selectedStore");
        if (selectedStoreFromQuery) {
          // 지도에서 예약하러 가기 버튼을 눌러온 경우
          setSelectedLocation(selectedStoreFromQuery);
          return selectedStoreFromQuery;
        } else if (location.state?.selectedStore) {
          // 예약 페이지로 직접 접근한 경우
          setSelectedLocation(location.state.selectedStore);
          return location.state.selectedStore;
        }
        // 기본값으로 'JEJU' 선택
        setSelectedLocation('');
        return '';
      }, [location]);
    useEffect(() => {
        setSelectstore(initialSelectedStore);
  

        const handleScroll = () => {
            const bookingStoreSection = document.getElementById("booking-store-section");
            const bookingStep2Section = document.getElementById("booking-step2-section");
        
            if (bookingStoreSection && bookingStep2Section) {
                const bookingStoreSectionBottom = bookingStoreSection.getBoundingClientRect().bottom;
                const bookingStep2SectionTop = bookingStep2Section.getBoundingClientRect().top;
        
                // 특정 위치에 도달하면 상태 업데이트
                if (bookingStoreSectionBottom <= window.innerHeight && bookingStep2SectionTop > 0) {
                // 스크롤 위치가 특정 구간에 있을 때의 처리
                // 여기에서 상태 업데이트 등을 수행할 수 있습니다.
                }
            }
        };
    
        // 스크롤 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);
    
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [initialSelectedStore]);

    //table state 핸들러
    const handle_table = (new_table) =>{
        set_table(new_table);
    };

    //price state 핸들러
    const handle_price = () => {
        let new_price = price;
        if(table==='hole'){
            new_price = selectperson * initial_jeju_price[0].price;
            set_price(new_price);
        }else if(table==='ocean' || table==='terrace'){
            new_price = selectperson * initial_jeju_price[1].price;
            set_price(new_price);
        }else if(table==='room'){
            new_price = initial_jeju_price[2].price;
            set_price(new_price);
        }
    };

    useEffect(() => {
        handle_price();
    }, [table]);

    console.log(price);

    return(
        <form id="main_form">
            <Booking_side
                selectstore={selectstore}
                selectperson={selectperson}
                selectdate={selectdate} 
                selecttime={selecttime} 
                selecttime2={selecttime2} 
                table={table}
                price={price}
            /> 
            <div>
                <Booking_store 
                    setSelectstore={setSelectstore}
                    initialSelectedStore={initialSelectedStore} 
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                />
                <div className="main_step2">
                    <Booking_person 
                        setSelectperson={setSelectperson} 
                    />
                    <Booking_date 
                        setSeledate={setSeledate} 
                    />
                    <Booking_time 
                        setSeletime={setSeletime} 
                        setSeletime2={setSeletime2} 
                    />
                    <Booking_table 
                        handle_table={handle_table}
                        table={table}
                    />                    
                </div>                
            </div>            
        </form>           
    )
}
export default Booking;