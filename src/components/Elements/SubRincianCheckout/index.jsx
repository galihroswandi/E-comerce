import toRupiah from "@develoka/angka-rupiah-js";

const SubRincianCheckout = (props) => {
  const { data, text, value, classname } = props;
  return (
    <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
      <p className="lg:ml-[65%]">{text}</p>
      <p className={classname}>
        {data && toRupiah(value, { floatingPoint: 0 })}
      </p>
    </div>
  );
};

export default SubRincianCheckout;
