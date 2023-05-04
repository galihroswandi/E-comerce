import React from "react";
import { Carousel, initTE } from "tw-elements";
import { Link } from "react-router-dom";

import FlatDesign from "../../../assets/img/flat-design.png";

const Banner = () => {
  initTE({ Carousel });
  return (
    // <div className="mt-[9rem] lg:py-24 py-12 px-4 bg-green-500 lg:px-10">
    //   <div className="container flex justify-between items-center">
    //     <div className="description">
    //       <h1 className="lg:text-4xl text-3xl font-semibold text-slate-100">
    //         Shopping
    //       </h1>
    //       <h2 className="lg:text-6xl text-5xl font-bold mt-3 text-slate-200 lg:leading-[4.5rem] leading-[3.5rem]">
    //         Temukan Barang Yang Kamu Inginkan
    //       </h2>
    //       <p className="lg:text-xl text-lg mt-5 text-slate-100">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    //         eius perferendis, totam sequi dignissimos quisquam necessitatibus
    //         adipisci beatae dolorum nemo.
    //       </p>
    //       <Link
    //         href="#all-products"
    //         className="inline-block mt-5 py-3 px-5 bg-green-300 rounded-lg text-green-700 shadow-md hover:bg-green-400 hover:text-green-800"
    //       >
    //         Shop Now
    //       </Link>
    //     </div>
    //     <div className="img hidden lg:block">
    //       <img src={FlatDesign} alt="Flat Design" width="1500" />
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        id="carouselExampleControls"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* <!--Carousel items--> */}
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          {/* <!--Second item--> */}
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          {/* <!--Third item--> */}
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </>
  );
};

export default Banner;
