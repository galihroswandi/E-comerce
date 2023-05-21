import Option from "./Option";
import SelectOption from "./SelectOption";
import Text from "./Text";

const MetodePembayaran = (props) => {
  const { setMetodePembayaran } = props;
  return (
    <div className="metode-pembayaran mt-5 mb-4">
      <Text text="Metode Pembayaran" />
      <SelectOption handleChange={setMetodePembayaran}>
        <Option text="Pilih Metode Pembayaran" value="" />
        <Option text="COD (Bayar Ditempat)" value="COD ( Bayar Ditempat )" />
      </SelectOption>
    </div>
  );
};

export default MetodePembayaran;
