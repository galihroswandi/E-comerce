const CardKategori = ({ img, title }) => {
  return (
    <div className="card bg-white flex flex-col justify-center items-center py-2 shadow-md rounded-lg">
      <div className="img">
        <img src={img} alt="Pakaian" />
      </div>
      <div className="desc">
        <h1 className="text-green-700">{title}</h1>
      </div>
    </div>
  );
};

export default CardKategori;
