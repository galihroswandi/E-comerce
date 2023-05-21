import CryptoJS from "crypto-js";

export const encryptData = (value) => {
    return CryptoJS.AES.encrypt(value, process.env.REACT_APP_SECRET_KEY)
}