import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Banner = () => {
  return (
    <>
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
            height: "30vh",
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img
              src="https://source.unsplash.com/random/1920x100"
              alt="Image 1"
              className="w-full"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://source.unsplash.com/random/1920x100"
              alt="Image 2"
              className="w-full"
            />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Banner;
