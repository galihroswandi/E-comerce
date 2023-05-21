import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Slide from "./Slide";
import Banner1 from "./../../../assets/img/banner-1.jpg";
import Banner2 from "./../../../assets/img/banner-2.jpg";

const Banner = () => {
  return (
    <div className="wrapper mt-[9rem] lg:py-24. py-12. lg:px-10">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          gap: "1rem",
          focus: "center",
          autoplay: true,
          pauseOnHover: false,
          height: "45vh",
        }}
        aria-label="My Favorite Images"
      >
        <Slide imgUrl={Banner1} alt="Image 1" />
        <Slide imgUrl={Banner2} alt="Image 2" />
      </Splide>
    </div>
  );
};

export default Banner;
