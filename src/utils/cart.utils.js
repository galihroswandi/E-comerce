import { setData, setCarts } from "../config/redux/reducer/cartSlice";
import { getAllCartByUser } from "../config/cart";

export const HandleCheked = (dispacth) => {
    const checkedChild = Array.from(
        document.querySelectorAll(".checked-child")
    );

    if (checkedChild !== 0) {
        const filterChild = checkedChild.filter((e) => e.checked === true);
        if (filterChild.length > 1) {
            const idData = filterChild.map((el) => el.dataset.id);

            getAllCartByUser(1).then((res) => {
                const newData = [];
                idData.forEach((id) => {
                    res.filter((re) => {
                        if (re.data.id_cart == id) {
                            newData.push(re);
                        }
                    });
                });
                dispacth(setCarts(newData));
            });
        } else if (filterChild.length == 1) {
            getAllCartByUser(1).then((res) => {
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