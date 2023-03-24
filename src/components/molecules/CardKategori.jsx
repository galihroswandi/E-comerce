const CardKategori = ({ img, title }) => {
  return (
    <div className="card bg-white flex flex-col justify-center items-center py-2">
      <div className="img">
        <img src={img} alt="Pakaian" />
      </div>
      <div className="desc">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default CardKategori;
