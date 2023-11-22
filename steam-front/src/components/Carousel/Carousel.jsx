import React,{useState,useEffect} from 'react';

import style from "./Carousel.module.css";

import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/Steam.png";
import img2 from "../../assets/SteamLogo.png";

const data = [
  img1,img2
];

//props: title, carouselData
const Carousel = ({title}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : data.length - 1);
  };

  const goToNext = () => {
    setActiveIndex(prevIndex => prevIndex < data.length - 1 ? prevIndex + 1 : 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // 3000ms = 3초마다 다음 슬라이드로 넘어감

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [activeIndex]); // activeIndex가 바뀔 때마다 인터벌을 재설정

  return (
    <>
      <p>{title}</p>

      <div className={style.carouselDiv}>
      <div className={style.carouselLeftArrorw} onClick={goToPrev}>
        <IoIosArrowBack size="48"/>
      </div>
      <div className={style.carouselContent}>
        <div className={style.carouselImg}>
          <img src={data[activeIndex]} alt="이미지" />
        </div>
      </div>
      <div className={style.carouselRightArrorw} onClick={goToNext}>
        <IoIosArrowForward size="48"/>
      </div>
      </div>

      <div className={style.carouselBtn}>
        {data.map((_, index) => (
          <div
            key={index}
            className={index === activeIndex ? style.activeBtn : style.closeBtn}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;