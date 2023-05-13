import axios from 'axios';

const BASE_URL = "http://localhost:4000";

export const getProvinsi = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/provinces`)
            .then(res => {
                resolve(res)
                // console.log(res);
            }).catch(err => {
                console.log(err)
            })
    })
}

export const getCities = (id_provinsi) => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/cities/${id_provinsi}`)
            .then(res => {
                resolve(res);
                console.log(res);
            }).catch(err => {
                alert('Internal Server Error')
                console.log(err);
            })
    })
}