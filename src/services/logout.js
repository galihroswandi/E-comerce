import { auth } from "../config/firebase";

const logout = () => {
    return new Promise((resolve, reject) => {
        auth.signOut()
            .then(() => {
                resolve({ status: true });
            })
            .catch(err => {
                reject({ status: err })
            })
    })
}

export default logout;