import { getDatabase, ref, onValue } from "firebase/database";
import { setDataByAmount } from "../redux/reducer/ProductsSlice";
import { app } from "../firebase";

export const getProducts = (dispatch) => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "products");

    return new Promise((resolve, reject) => {
        onValue(starCountRef, (snapshot) => {
            const dataArray = [];
            snapshot.forEach((el) => {
                const childData = el.val();
                dataArray.push(childData);
            });

            resolve(dataArray);

            try {
                dispatch(setDataByAmount(dataArray));
            } catch (err) {
                console.log(err);
            }
        }, err => {
            reject(err);
        });
    })
}