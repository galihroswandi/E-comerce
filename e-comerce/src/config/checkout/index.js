import axios from "axios";
import { url } from "../api/api.config";

export const getAllCheckout = (id_user) => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/checkout/${id_user}`)
            .then(res => {
                console.log(res);
            })

    })
}