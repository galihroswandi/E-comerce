import { encryptData } from "../../utils/encryptedData";
import checkLogin from "../../utils/loginCheck.util";
import { setAlamat, setEmail, setId, setNama, setNoHP, setUsername } from "../redux/reducer/profilSlice";
import { getAllUser } from "../users";

export const getUser = async (dispatch) => {
    const user = await checkLogin();
    const users = await getAllUser();
    const dataArray = users.find(el => el.data.uid === user.uid);

    try {
        const profil = dataArray;
        dispatch(setUsername(encryptData(profil.data.username)));
        dispatch(setNama(encryptData(profil.data.nama)));
        dispatch(setEmail(encryptData(profil.data.email)));
        dispatch(setNoHP(encryptData(profil.data.noHP)));
        dispatch(setAlamat(encryptData(profil.data.alamat)));
        dispatch(setId(profil.id));
    } catch (err) {
        console.log(err);
    }
}

export const usernameCheck = async (value) => {

    const users = await getAllUser();

    return new Promise((resolve, reject) => {
        const dataFilter = users.find(el => el.data.username === value);
        resolve(dataFilter);
    })
}

export const submitUsernameCheck = async (value, id) => {
    const users = await getAllUser();
    return new Promise((resolve, reject) => {
        const find = users.find(user => user.id === id && user.data.username === value);
        if (!find) {
            const dataFilter = users.find(el => el.data.username === value);
            !dataFilter ? resolve({ status: "oke" }) : resolve({ status: "not oke" });
            return false;
        }
        resolve({ status: "oke" });
    })
}