import { getDatabase, ref, onValue, push } from "firebase/database";

import { setDataCheckout } from "../redux/reducer/checkoutSlice";
import { app } from "../firebase";
import { getProducts } from "../products/products";

const db = getDatabase(app);

export const addCheckout = (data) => {
    const starRef = ref(db, "pesanan");
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
    const starRef = ref(db, "pesanan");

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
            dataArray.forEach((arr, index) => {
                if (arr.data.product && arr.data.product.length > 0) {
                    arr.data.product.forEach(prod => {
                        const filteredProduct = products.find(el => parseInt(el.id_product) === parseInt(prod.data.id_product));
                        if (filteredProduct) {
                            if (!dataArray[index].product) {
                                dataArray[index].product = [];
                            }
                            dataArray[index].product.push(filteredProduct);
                        }
                    })
                }
            });
            resolve(dataArray);

            try {
                dispacth(setDataCheckout(dataArray));
            } catch (err) {
                console.log(err);
            }
        })
    })
}

export const updateStatus = (id, data) => {

}