import axios from "axios";
import { getDatabase, ref, onValue } from "firebase/database";

import { url } from "../api/api.config";
import { setDataCheckout } from "../redux/reducer/checkoutSlice";
import { app } from "../firebase";

const getFromAPI = (path) => {
    const db = getDatabase(app);
    const starRef = ref(db, `${path}`);
    const dataArray = [];


}

export const getAllCheckout = async (id_user, dispacth) => {
    const db = getDatabase(app);
    const starRef = ref(db, "checkout");

    return new Promise((resolve, reject) => {
        onValue(starRef, (snapshot) => {
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

            console.log(dataArray);
            try {
                dispacth(setDataCheckout(dataArray));
            } catch (err) {
                console.log(err);
            }
        })
    })
}