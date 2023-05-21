import { SplideSlide } from "@splidejs/react-splide";

const Slide = (props) => {
  const { imgUrl, alt } = props;
  return (
    <SplideSlide>
      <img
        src={imgUrl}
        alt={alt}
        className="object-cover h-[100%] w-[100%] shadow-md"
      />
    </SplideSlide>
  );
};

export default Slide;
