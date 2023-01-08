import React from "react";
import Timer from "../Timer/Timer";
import "./Header.css";
import Logo from "../Images/logo.png";
// import Logo2 from "../Images/logo.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Header(props) {
console.log(props);

  return (
    <>
      <div className="timer">
        <Timer />
      </div>
      <nav>
        <img src={Logo} alt="png" width="40px" className="logo" />
        <h4 className="logo-name">Umidxon Developer</h4>
        <ul className="unordered">
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Price</li>
        </ul>
        <select
          name=""
          id=""
          style={{
            outline: "none",
            borderColor: "blue",
            borderRadius: "5px",
            marginLeft: "470px",
            marginRight: "10px"
          }}>
          <option value="RU">RU</option>
          <option value="UZ">UZ</option>
          <option value="EN">EN</option>
        </select>
      </nav>
      <header>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <img src={{ Logo }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={{ Logo2 }} alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper> */}
      </header>
    </>
  );
}
