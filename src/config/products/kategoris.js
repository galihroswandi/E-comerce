import axios from "axios";
import { url } from "../api/api.config";

export const getAllKategoris = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url()}/kategoris`)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
    })
}