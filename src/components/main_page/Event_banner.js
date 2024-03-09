import React, {useRef, useState, useEffect} from 'react';

import slide_banner1 from '../../assets/images/Slidebanner1.jpg';
import slide_banner2 from '../../assets/images/Slidebanner2.jpg';
import slide_banner3 from '../../assets/images/Slidebanner3.jpg';
import slide_banner4 from '../../assets/images/Slidebanner4.jpg';
import slide_banner5 from '../../assets/images/slidebanner5.jpg';

const Event_banner = () => {

    const [currentIdx, setCurrentIdx] = useState(0); // 현재 슬라이드 인덱스
    const slidesRef = useRef(null); // ul
    const [slideCount, setSlideCount] = useState(0); // 슬라이드 총 개수 
    const [currentSlideCount, setCurrentSlideCount] = useState(1); // 현재 슬라이드 번호
    const [slidesWidth, setSlidesWidth] = useState({width: '0'}); // 슬라이드 전체 너비
    const [slidesLeft, setSlidesLeft] = useState('0px'); // 슬라이드 왼쪽 여백
    const [isPlaying, setIsPlaying] = useState(true); // 자동 재생 여부
    const slideWidth = 1000; // 각 슬라이드의 너비
    const slideMargin = 24; // 슬라이드 간 여백
    let timer = useRef(null);

    // 슬라이드 전체 너비 업데이트 함수
    const updateWidth = () => {
        const newSlideCount = slidesRef.current.children.length;
        // 새로운 슬라이드 전체 너비를 계산하고 상태르 업데이트
        setSlidesWidth({
            width: `${(slideWidth + slideMargin) * newSlideCount - slideMargin}px`,
        });
    };

    // 슬라이드 복제 및 초기 위치 설정 함수
    const makeClone = () => {
        if (slidesRef.current) {
            let newSlideCount = slidesRef.current.children.length;
            setSlideCount(newSlideCount);
        }
        // 슬라이드를 복제하여 원본 앞 뒤에 추가
        for (let i=0; i<slideCount; i++) {
            let cloneSlide = slidesRef.current.children[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slidesRef.current.appendChild(cloneSlide);
        }
    
        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = slidesRef.current.children[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slidesRef.current.prepend(cloneSlide);
        }
    
        updateWidth(); // 너비 업데이트
        setInitialPosition(); // 초기 위치 설정
        setTimeout(() => {
            slidesRef.current.classList.add('animated');
        }, 100);
    };

    // 초기 위치 설정 함수
    const setInitialPosition = () => {
        const slides = slidesRef.current;
        // 초기 슬라이드 위치를 설정하여 중앙에 정렬
        const initialTranslateValue = (-(slideWidth + ((slideMargin)/slideCount)) * slideCount) / 2 - ((slideMargin * slideCount) + slideWidth);
        slides.style.transform = `translateX(${initialTranslateValue}px)`;
    };

    // 슬라이드 이동 함수
    const moveSlide = (num) => {
        setCurrentIdx(num);
        // updateCurrentSlideCount();
        let newLeftValue = `${-num * (slideWidth + slideMargin)}px`;
        setSlidesLeft(newLeftValue);
        
        // 마지막 슬라이드로 이동한 경우 초기 위치로 돌아가도록 설정
        if (num === slideCount){
            setTimeout(() => {
                slidesRef.current.classList.remove('animated');
                setCurrentIdx(0);
                updateCurrentSlideCount();
                setSlidesLeft(`0px`);
            }, 500);
            // 초기 위치로 돌아간 후 애니메이션 클래스 추가
            setTimeout(() => {
                slidesRef.current.classList.add('animated');
            }, 600);
        }
    };

    
    // 다음 슬라이드로 이동하는 핸들러 함수
    const handleNextClick = () => {
        moveSlide(currentIdx + 1);
        resetAutoSlide();
        console.log(currentIdx);
    };

    // 이전 슬라이드로 이동하는 핸들러 함수
    const handlePrevClick = () => {
        const slides = slidesRef.current;
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        } else{
            // 처음 슬라이드에서 이전 버튼 클릭 시 마지막 슬라이드로 이동하도록 설정
            slides.classList.remove('animated');
            setSlidesLeft(`${-((slideWidth + slideMargin) * slideCount)}px`);
            setCurrentIdx(slideCount);
            // console.log(slideCount);
            updateCurrentSlideCount(); 
            setTimeout(() => {
                slides.classList.add('animated');
            }, 0);
        }
        // console.log(currentIdx);
        // console.log(slideCount);
        resetAutoSlide();
    };

    // 현재 슬라이드 번호 업데이트 함수 (1부터 시작)
    const updateCurrentSlideCount = () => {
        const newCurrentSlideCount = (currentIdx % slideCount)+ 1;
        setCurrentSlideCount(newCurrentSlideCount);
    };

    // 슬라이드가 자동으로 이동하는 함수
    const autoSlide = () => {
        if(timer.current === undefined){
            timer.current = setInterval(() => {
                moveSlide(currentIdx + 1);
            }, 3000);
        }
    }

    // 자동 슬라이드를 멈춰주는 함수
    const stopSlide = () => {
        clearInterval(timer.current);
        timer.current = undefined;
    }

    // 슬라이드가 자동으로 넘어가는 효과를 잠깐 멈춰주는 함수
    const resetAutoSlide = () => {
        stopSlide();
        autoSlide();
    }


    // 자동슬라이드를 제어하는 버튼 이벤트 함수
    const handlePlayClick = () => {

        if (!isPlaying) {
            autoSlide();
        } else {
            stopSlide();
        }

        setIsPlaying(!isPlaying); // 상태를 토글 (클릭할 때마다 변경)
    };

    // autoSlide();

    useEffect(() => {
        const existingClones = slidesRef.current.querySelectorAll('.clone');
        existingClones.forEach(clone => {
            clone.remove();
        });
        makeClone();
        autoSlide();
        updateCurrentSlideCount();
        return()=>{
            stopSlide();
        }
    }, [slideCount, currentIdx]);

    return (
        <section id="event_banner">
            <div className="slide_banner">
                <ul className="banner_image" style={{width: slidesWidth, left: slidesLeft}} ref={slidesRef}>
                    <li>
                        <a href="#">
                            <img src={slide_banner1} alt="slide1"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={slide_banner2} alt="slide1"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={slide_banner3} alt="slide1"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={slide_banner4} alt="slide1"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={slide_banner5} alt="slide1"/>
                        </a>
                    </li>
                </ul>

                <div className="banner_arrow">
                    <button type="button" className="prev" onClick={handlePrevClick}>&lt;</button>
                    <button type="button" className="next" onClick={handleNextClick}>&gt;</button>
                </div>
                <div className="slide_counter">
                <button type="button" className={`play_btn${isPlaying ? '' : ' stop'}`} onClick={handlePlayClick}></button>
                    <div className="counter">
                        <div className="current_slide">{currentSlideCount}</div>
                        /
                        <div className="all_slide">{slideCount}</div>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default Event_banner;