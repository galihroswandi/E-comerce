import { getDatabase, onValue, ref } from "firebase/database";

export const getAllKategoris = () => {
    return new Promise((resolve, reject) => {
        const db = getDatabase();
        const starCountRef = ref(db, 'kategori');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = [];
            if (data) Object.keys(data).map(res => {
                dataArray.push({
                    id: res,
                    data: data[res]
                })
            })

            resolve(dataArray);
        }, err => {
            reject(err);
        })
    })
}