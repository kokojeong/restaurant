import React from 'react';
import "../../assets/styles/menu.css"
import menuimg1 from "../../assets/images/food/pasta1.jpg"
import menuimg2 from "../../assets/images/food/pasta2.jpg"
import menuimg3 from "../../assets/images/food/pizza1.jpg"
import menuimg4 from "../../assets/images/food/pizza2.jpg"
import menuimg5 from "../../assets/images/food/salad1.jpg"
import menuimg6 from "../../assets/images/food/steak1.jpg"
import menuimg7 from "../../assets/images/food/steak2.jpg"
import menuimg8 from "../../assets/images/food/steak3.jpg"

const menuData = [
  { name: '누가먹어도 맛있다고할만한 파스타', price: '10,000원', image: menuimg1 }, // 중괄호 제거
  { name: '지금까지 이런맛은 없었을 파스타', price: '15,000원', image: menuimg2 }, // 직접 import된 이미지 사용
  { name: '너 너무 곱추같다 허리좀 피자', price: '12,000원', image: menuimg3 },
  { name: '너 표정왜그래? 인상좀 피자', price: '18,000원', image: menuimg4 },
  { name: '퍽퍽한 살코기만 들어있는 샐러드', price: '10,000원', image: menuimg5 },
  { name: '오늘 저녁은 스테이크먹는게 어때?', price: '15,000원', image: menuimg6 },
  { name: '육즙가득 어제 먹은것보다 훨씬맛있는 스테이크', price: '12,000원', image: menuimg7 },
  { name: '돼지고기는 사치지 소고기 스테이크가 대세', price: '18,000원', image: menuimg8 },
];

function MenuPage() {
  return (
    <>
    <div className="menu-container">
      {menuData.map((menuItem, index) => (
        <div key={index} className="menu-item">
          <img src={menuItem.image} alt={menuItem.name} />
          <h3>{menuItem.name}</h3>
          <p>{menuItem.price}</p>
        </div>
        
      )
        
      )}
    </div>
    </>
  );
}

export default MenuPage;