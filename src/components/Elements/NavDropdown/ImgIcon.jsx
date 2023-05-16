const ImgIcon = (props) => {
  const { imgUrl, alt, classname } = props;
  return (
    <img
      src={imgUrl}
      alt={alt}
      width="26"
      height="28"
      className={`group-hover:text-slate-2 ${classname}`}
    />
  );
};

export default ImgIcon;
