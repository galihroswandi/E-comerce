import { useSelector } from "react-redux";

import MetodePembayaran from "../Elements/MetodePembayaran";
import OpsiPengiriman from "../Elements/OpsiPengiriman";
import ProductCheckout from "../Elements/ProductCheckout";
import SubtotalCheckout from "../Elements/SubtotalCheckout";

const BarangCheckout = (props) => {
  const { dataCarts, setOngkir, setMetodePembayaran } = props;
  const dataKeranjang = useSelector((state) => state.cart.carts);
  return (
    <section className="detail bg-white rounded-sm mb-5 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col md:flex-row lg:grid lg:grid-cols-3 lg:gap-0 gap-2 overflow-hidden">
      <div className="mb-3 md:mb-0 lg:col-span-2 lg:relative">
        <h1 className="text-green-500 flex items-center gap-1 text-base lg:text-xl mb-2 lg:mb-5">
          Barang Yang Dipesan
        </h1>

        <div className="main-products">
          {!dataKeranjang
            ? "Data gagal di load..."
            : dataKeranjang.map((ch, index) => {
                return (
                  <div key={index}>
                    <ProductCheckout dataCheckout={ch} />
                  </div>
                );
              })}
        </div>

        <SubtotalCheckout dataCarts={dataCarts} />
      </div>

      <div className="lg:flex lg:flex-col lg:justify-evenly lg:ml-28">
        <OpsiPengiriman setOngkir={setOngkir} />
        <MetodePembayaran setMetodePembayaran={setMetodePembayaran} />
      </div>
    </section>
  );
};

export default BarangCheckout;
