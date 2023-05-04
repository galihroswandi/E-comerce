import { auth } from "../config/firebase";

const checkLogin = () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(function (user) {
            let dataArr = {};
            if (user) {
                var uid = user.uid;
                dataArr = {
                    status: true,
                    uid
                }
            } else {
                dataArr = {
                    status: false
                }
            }
            resolve(dataArr);
        });
    })
}

export default checkLogin;