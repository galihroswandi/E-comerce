import { setCarts } from "../config/redux/reducer/cartSlice";
import { getAllCartByUser } from "../config/cart";
import checkLogin from "./loginCheck.util";

export const HandleCheked = async (dispacth) => {
    const checkedChild = Array.from(
        document.querySelectorAll(".checked-child")
    );

    const user = await checkLogin();

    if (user.status) {
        if (checkedChild !== 0) {
            const filterChild = checkedChild.filter((e) => e.checked === true);
            if (filterChild.length > 1) {
                const idData = filterChild.map((el) => el.dataset.id);

                getAllCartByUser(user.uid).then((res) => {
                    const newData = [];
                    idData.forEach((id) => {
                        res.filter((re) => {
                            if (re.data.id_cart === id) {
                                newData.push(re);
                            }
                        });
                    });
                    dispacth(setCarts(newData));
                });
            } else if (filterChild.length == 1) {
                getAllCartByUser(user.uid).then((res) => {
                    const newData = [];
                    res.filter((re) => {
                        if (re.data.id_cart == filterChild[0].dataset.id) {
                            newData.push(re);
                        }
                    });
                    dispacth(setCarts(newData));
                });
            } else {
                dispacth(setCarts([]));
            }
        }
    }
}