import Option from "../MetodePembayaran/Option";
import SelectOption from "../MetodePembayaran/SelectOption";
import Text from "../MetodePembayaran/Text";

const OpsiPengiriman = (props) => {
  const { setOngkir } = props;
  return (
    <div className="opsi-pengiriman">
      <Text text="Opsi Pengiriman" />
      <SelectOption handleChange={setOngkir}>
        <Option text="Pilih Opsi Pengiriman" value="" />
        <Option text="Hemat (Rp15.500)" value="15500" />
        <Option text="Regular (Rp17.500)" value="17500" />
        <Option text="Kargo (Rp20.000)" value="20000" />
      </SelectOption>
    </div>
  );
};

export default OpsiPengiriman;
