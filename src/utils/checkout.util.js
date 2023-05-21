export const hitungSubtotal = (dataKeranjang) => {
    return dataKeranjang.length >= 1
        ? dataKeranjang
            .map((checkout) => checkout.data.totalHarga)
            .reduce((acc, currentVal) => acc + currentVal)
        : 0;
};

export const hitungTotalBayar = (ongkir, biayaLayanan, subtotalProduk) => {
    return parseInt(ongkir) + parseInt(biayaLayanan) + parseInt(subtotalProduk);
};