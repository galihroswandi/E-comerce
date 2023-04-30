import { getDatabase, ref, onValue } from "firebase/database";

import { setDataCheckout } from "../redux/reducer/checkoutSlice";
import { app } from "../firebase";
import { filterProducts } from "../products/products";

export const getAllCheckout = (id_user, dispacth) => {
    const db = getDatabase(app);
    const starRef = ref(db, "checkout");

    return new Promise((resolve, reject) => {
        onValue(starRef, async (snapshot) => {
            const res = snapshot.val();
            const dataArray = [];

            if (res) {
                Object.keys(res).map(el => {
                    res[el].id_user === id_user && dataArray.push({
                        id: el,
                        data: res[el]
                    })
                })
            }

            const [products] = await filterProducts(dataArray[0].data.id_product);

            dataArray[0].product = products;

            try {
                dispacth(setDataCheckout(dataArray));
            } catch (err) {
                console.log(err);
            }
        })
    })
}