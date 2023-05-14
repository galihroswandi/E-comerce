import { getDatabase, onValue, push, ref, update } from "firebase/database";
import { app } from "../firebase";
import checkLogin from "../../utils/loginCheck.util";

const db = getDatabase(app);

export const getAllUser = () => {
    const starRef = ref(db, "users");
    return new Promise((resolve, reject) => {
        onValue(starRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = [];

            if (!data) {
                resolve(undefined);
            } else {
                Object.keys(data).map(res => {
                    dataArray.push({
                        id: res,
                        data: data[res]
                    })
                })
                resolve(dataArray);
            }

        })

    })
}

export const addUser = async (data) => {
    const startRef = ref(db, "users");
    const users = await getAllUser();
    const uid = await checkLogin();

    const find = users !== undefined ? users.find(user => user.data.noHP === data.noHP) : undefined;

    return new Promise((resolve, reject) => {
        if (find === undefined) {
            if (uid.status) {
                push(startRef, data)
                    .then(() => {
                        resolve(true);
                    })
                    .catch(err => {
                        reject(err);
                    })
                return false;
            }
        }

        resolve(true);
    })
}

export const updateUser = (data, id) => {
    const starRef = ref(db, `users/${id}`);

    return new Promise((resolve, reject) => {
        update(starRef, data).then(() => {
            resolve({ status: "ok" });
        }, err => {
            reject(err);
        })
    })
}