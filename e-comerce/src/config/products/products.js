import axios from "axios";
import { url } from "../api/api.config";

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url()}/products`)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
    })
}