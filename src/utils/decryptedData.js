import CryptoJS from "crypto-js";

export const decryptedData = (cryptedData) => {
    return CryptoJS.AES.decrypt(
        cryptedData,
        process.env.REACT_APP_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
};