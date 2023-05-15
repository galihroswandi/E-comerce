import CryptoJS from "crypto-js";

export const decryptedData = (cryptedData) => {
    return CryptoJS.AES.decrypt(
        cryptedData,
        import.meta.env.VITE_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
};