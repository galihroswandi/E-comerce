import axios from "axios";
import { url } from "../api/api.config";
import { setLoading } from "../redux/reducer/loading";

export const addCart = (data, dispatch) => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
        axios.post(`${url()}/cart`, data)
            .then(res => {
                resolve(res);
                dispatch(setLoading(false));
            })
            .catch(err => {
                reject(err);
                dispatch(setLoading(false));
            })
    })
}

export const getAllCartByUser = (id_user) => {
    return new Promise((resolve, reject) => {
        axios.get(`${url()}/cart`)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const removeCart = (id_cart) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${url()}/cart/${id_cart}`)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
    })
}

export const updateKuantitas = (id_cart, data) => {
    return new Promise((resolve, reject) => {
        axios.patch(`${url()}/cart/${id_cart}`, data)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
    })
}