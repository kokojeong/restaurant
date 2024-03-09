// Booking_time.js
import React, { useState } from "react";

export default function TIME({ setSeletime, setSeletime2 }) {
  const [selectedTab, setSelectedTab] = useState("점심");

  const handletime = (tab) => {
    setSelectedTab(tab);
    setSeletime(tab);
  };

  const handletime2 = (lunch) => {
    setSeletime2(lunch);
  };

  return (
    <>
      <div className="main_step4">
        <div className="step4_body">
          <span className="step_first">STEP4</span>
          <span> 시간 선택</span>
          <div className="step4_slide_back"></div>
          <div className="time">
            <ul>
              <li>점심과 저녁 시간으로 나뉘며, 각 두 타임씩 운영됩니다.</li>
              <li>식사 타임 사이에는 30분의 휴식타임이 있습니다.</li>
            </ul>
            <article className="article_main">
              <input
                type="radio"
                name="tabs"
                id="tab1"
                className="tab1"
                onChange={() => handletime("점심")}
                checked={selectedTab === "점심"}
              />
              <input
                type="radio"
                name="tabs"
                id="tab2"
                className="tab2"
                onChange={() => handletime("저녁")}
                checked={selectedTab === "저녁"}
              />
              <p className="tabBtn">
                <label htmlFor="tab1">Lunch(점심)</label>
                <label htmlFor="tab2">Diner(저녁)</label>
              </p>
              <div className="panel_index">
                <div>
                  <input type="radio" id="lunch1" name="lunch" />
                  <label htmlFor="lunch1" onClick={() => handletime2('12:00~13:30') }>Lunch1</label>
                  <span>12:00 ~ 13:30</span>
                  <input type="radio" id="lunch2" name="lunch" />
                  <label htmlFor="lunch2" onClick={() => handletime2('14:00~15:30') }>Lunch2</label>
                  <span>14:00 ~ 15:30</span>
                </div>
              </div>
              <div className="panel_index">
                <div>
                  <input type="radio" id="diner1" name="diner" />
                  <label htmlFor="diner1" onClick={() => handletime2('18:00~19:30') }>Diner1</label>
                  <span>18:00 ~ 19:30</span>
                  <input type="radio" id="diner2" name="diner" />
                  <label htmlFor="diner2" onClick={() => handletime2('20:00~21:30') }>Diner2</label>
                  <span>20:00 ~ 21:30</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
