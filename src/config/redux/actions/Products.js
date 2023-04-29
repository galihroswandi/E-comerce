import axios from "axios";
import { url } from "../../api/api.config";
import { setDataByAmount, filterDataByAmount } from "../reducer/ProductsSlice";

export const GetData = (dispatch) => {
    try {
        axios.get(`${url()}/products`).then((res) => {
            dispatch(setDataByAmount(res.data.data));
        });
    } catch (err) {
        console.log(err);
    }
}

export const findData = async (id, dispatch) => {
    try {
        const res = await axios.get(`${url()}/products/${id}`);
        dispatch(filterDataByAmount(res.data.data));
    } catch (err) {
        console.log(err);
    }
} 