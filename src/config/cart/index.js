import { setLoading } from "../redux/reducer/loading";
import { getDatabase, ref, push, onValue, remove, update } from "firebase/database";
import { app } from "./../firebase/index";
import checkLogin from "../../utils/loginCheck.util";

const db = getDatabase(app);

export const addCart = async (data, dispatch) => {
    dispatch(setLoading(true));
    const login = await checkLogin();
    return new Promise((resolve, reject) => {
        const cartRef = ref(db, "keranjang");

        getAllCartByUser(login.uid).then(res => {
            const check = res.length > 0 && res.find(el => el.data.id_product === data.id_product);
            if (check) {
                data.kuantitas += 1;
                data.totalHarga *= data.kuantitas;
                const id = check.id;
                update(ref(db, `keranjang/${id}`), data).then(() => {
                    resolve('Data berhasil ditambahkan!');
                }).catch(err => {
                    reject(err);
                })
                return false;
            } else {
                push(cartRef, data)
                    .then(res => {
                        resolve("Data berhasil ditambahkan !");
                    }).catch(err => {
                        reject("Data gagal ditambahkan !");
                        console.log("Error Adding Cart: ", err);
                    })
                return false;
            }
        })


    })
}

export const getAllCartByUser = (id_user) => {
    return new Promise((resolve, reject) => {
        const starCountRef = ref(db, 'keranjang');
        onValue(starCountRef, snapshot => {
            const data = snapshot.val();
            const dataArray = [];
            if (data) {
                Object.keys(data).map(res => {
                    dataArray.push({
                        id: res,
                        data: data[res]
                    })
                })
            }

            const findData = dataArray.filter(res => res.data.id_user === id_user);
            resolve(findData);

        }, err => {
            reject(err);
        })
    })
}

export const removeCart = (id_cart) => {
    return new Promise((resolve, reject) => {
        const dataRef = ref(db, `keranjang/${id_cart}`);
        remove(dataRef).then(() => {
            resolve(true);
        }).catch(err => {
            reject(err);
        })
    })
}

export const updateKuantitas = (id, kuantitas, products) => {
    return new Promise(async (resolve, reject) => {
        const user = await checkLogin();
        const res = await getAllCartByUser(user.uid);
        const filter = res.find(el => el.id === id);

        const [product] = products[0].filter(el => parseInt(el.id_product) === parseInt(filter.data.id_product));

        const totalHarga = product.harga * kuantitas;

        const data = {
            kuantitas: kuantitas,
            totalHarga: totalHarga
        }

        update(ref(db, `keranjang/${id}`), data)
            .then(() => {
                resolve('Kuantitas Berhasil Diubah !');
            }, err => {
                reject(err);
            })
    })
}