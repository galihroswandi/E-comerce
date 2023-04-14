import axios from "axios";
import { url } from "../api/api.config";
import { setDataCheckout } from "../redux/reducer/checkoutSlice";

export const getAllCheckout = (id_user, dispacth) => {
    return new Promise((resolve, reject) => {
        axios.get(`${url()}/checkout/${id_user}`)
            .then(res => {
                resolve(res);
                dispacth(setDataCheckout(res.data.data));
            }).catch(err => {
                reject(err);
            })

    })
}