import toRupiah from "@develoka/angka-rupiah-js";
import { useSelector } from "react-redux";

const SubtotalCheckout = (props) => {
  const { dataCarts } = props;
  const dataKeranjang = useSelector((state) => state.cart.carts);

  const hitungTotal = () => {
    return dataKeranjang.length >= 1
      ? dataKeranjang
          .map((checkout) => checkout.data.totalHarga)
          .reduce((acc, currentVal) => acc + currentVal)
      : 0;
  };

  return (
    <div className="total flex justify-between items-center border-t. border-t-green-500. mt-2 lg:mt-5 lg:text-lg text-sm text-slate-700">
      <h1>Subtotal:</h1>
      <h1>{dataCarts && toRupiah(hitungTotal())}</h1>
    </div>
  );
};

export default SubtotalCheckout;
