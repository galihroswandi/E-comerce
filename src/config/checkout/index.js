import { getDatabase, ref, onValue, push } from "firebase/database";

import { setDataCheckout } from "../redux/reducer/checkoutSlice";
import { app } from "../firebase";
import { getProducts } from "../products/products";

const db = getDatabase(app);

export const addCheckout = (data) => {
    const starRef = ref(db, "checkout");
    return new Promise((resolve, reject) => {
        push(starRef, data)
            .then(() => {
                resolve('Data Checkout berhasil ditambahkan !');
            }).catch(err => {
                reject('Data Checkout gagal ditambahkan !');
            })
    })
}

export const getAllCheckout = (id_user, dispacth) => {
    const starRef = ref(db, "checkout");

    return new Promise((resolve, reject) => {
        onValue(starRef, async (snapshot) => {
            const res = snapshot.val();
            const dataArray = [];

            if (res) {
                Object.keys(res).map(el => {
                    res[el].id_user === id_user && dataArray.push({
                        id: el,
                        data: res[el],
                    })
                })
            }

            const products = await getProducts();
            products.map(el => {
                dataArray.forEach((arr, index) => {
                    if (parseInt(arr.data.id_product) === parseInt(el.id_product)) {
                        dataArray[index].product = el;
                    }
                })
            })

            try {
                dispacth(setDataCheckout(dataArray));
            } catch (err) {
                console.log(err);
            }
        })
    })
}