import blandimg from "../../assets/images/b_about01.jpg";
import content01 from "../../assets/images/b_about03.jpg";
import content02 from "../../assets/images/b_about04.jpg";
import content03 from "../../assets/images/b_about05.jpg";
import "../../assets/styles/brand_intro.css";



export default function bland(){
  return(
    <section className="out_box">
      <div className="container_top">
        <p className="text_top">
          아구찜 이탈리안 레스토랑은<br/>
          경쾌하게 재해석한<br/>
          이탈리안 캐주얼 브런치 &amp; 다이닝입니다.
        </p>
        <p className="text_middle">
          바쁘게 돌아가는 일상 속,<br/>
          정성을 담은 음식과 와인 그리고 음악과 쉼이 있는 특별한 시간을 제공합니다.
        </p>
        <p className="text_bottom">
          아구찜에서 직접 뽑은 수제 파스타와 저온숙성 반죽으로 만든 정통 피자, 수비드 &#40;저온조리&#41; 조리법으로<br/>
          만들어 보다 부드럽고 육즙 가득한 스테이크를 맛볼 수 있는 것은 물론<br/>
          신선한 재료 본연의 특징을 살린 감각적인 메뉴들을 선보입니다.
        </p>
      </div>
      <div className="container_img">
        <img src={blandimg}></img>
      </div>
      <div className="container_middle">
        <p>
          우리는 늘 건강하고 행복한 공간을 만들기 위해 고민했습니다.<br/>
          우리가 오랫동안 추구한 건강함과 정직함의 가치,<br/>
          그리고 그 가치를 건강한 먹거리로 만들기 위한 오랜 노력.<br/>
          아구찜는 이 특별한 가치를 편안한 공간에서 만날 수 있도록 실현된 공간입니다.
        </p>
      </div>
      <div className="container_center">
        <div className="center_img">
          <p>
            Good Place
            <br/>
            And Healthy Food
          </p>
        </div>
      </div>
      <div className="container_bottom">
        <div className="bottom_content01">
          <img src={content01}></img>
          <div className="container_text">
            <p>위치 및 좌석수</p>
            <p>
                아구찜 이탈리안 레스토랑은 회현역1번 출구
                골목에 자리잡고 있으며, 아구찜 2층에
                위치하고 있습니다. 총 좌석수는 100좌석 입니다.
            </p>
          </div>
        </div>
      </div>
      <div className="container_bottom">
        <div className="bottom_content01">
          <div className="container_text">
              <p>라이브 공연</p>
              <p>
                근사한 미식의 경험과 함께
                아티스트가 연주하는 음악을 감상해보세요.
                최상급 육류, 저온 숙성 반죽으로 만든
                메뉴들과 잊지 못할 경험을 드립니다.
              </p>
            </div>
            <img src={content02}></img>
        </div>
      </div>
      <div className="container_bottom">
        <div className="bottom_content01">
            <img src={content03}></img>
          <div className="container_text">
            <p>별도의 주차 공간</p>
            <p>
              소중한 분과 함께하는 귀중한 시간
              편하게 방문하여 모임을 가지기에 적합합니다.
              자세한 사항은 02-0000-0000 또는
              02-0000-0000로 문의주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}