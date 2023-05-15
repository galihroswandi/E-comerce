import CryptoJS from "crypto-js";

export const encryptData = (value) => {
    return CryptoJS.AES.encrypt(value, import.meta.env.VITE_SECRET_KEY)
}