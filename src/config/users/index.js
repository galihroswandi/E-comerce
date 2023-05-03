import { getDatabase, onValue, push, ref } from "firebase/database";
import { app } from "../firebase";

const db = getDatabase(app);

export const getAllUser = () => {
    const starRef = ref(db, "users");
    return new Promise((resolve, reject) => {
        onValue(starRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = [];
            Object.keys(data).map(res => {
                dataArray.push({
                    id: res,
                    data: data[res]
                })
            })
            resolve(dataArray);
        })

    })
}

export const addUser = async (data) => {
    const startRef = ref(db, "users");
    const users = await getAllUser();

    const find = users.find(user => user.data.noHP === data.noHP);

    return new Promise((resolve, reject) => {
        if (find === undefined) {
            push(startRef, data)
                .then(() => {
                    resolve(true);
                })
                .catch(err => {
                    reject(err);
                })
            return false;
        }

        resolve(true);
    })
} 