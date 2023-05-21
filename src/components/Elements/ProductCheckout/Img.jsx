const Img = (props) => {
  const { url, alt } = props;
  return (
    <img src={url} alt={alt} className="w-16 lg:w-24 border p-0.5 rounded-md" />
  );
};

export default Img;
