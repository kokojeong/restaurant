
export default function PERSON({setSelectperson}) {
  const handleperson = (shop) => {
    setSelectperson(shop);
  }

  const max_person = 6;
  const booking_select_person = () =>{
    let person_list=[];
    for(let i=1; i<=max_person; i++){
      person_list.push(
        <>
          <input type="radio" id={`select${i}`} name="shop" onClick={() => handleperson (`${i}`)}/>
          <label for={`select${i}`}>{i}명</label>
        </>
      )      
    }    
    return person_list;
  };

  return(
    <>
    <div className="step2_main">
      <span>STEP2</span>
      <span> 인원 선택</span>
      <div className="step2_slide_back"></div>
      <div className="step2_person">
        <ul>
          <li>7명 이상의 단체는 선택하신 지점으로 직접 문의 부탁드립<br/>니다. </li>
        </ul>
        <div className="select_index">
          {booking_select_person()}
        </div>
      </div>
    </div>
    </>
  )
}