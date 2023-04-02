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

export const findProduct = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${url()}/products/${id}`)
            .then(res => {
                let data = [];
                data.push(res.data.data);
                resolve(data);
            }).catch(err => {
                reject(err);
            })
    })
}