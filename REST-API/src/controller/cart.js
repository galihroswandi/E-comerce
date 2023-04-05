const cartModel = require('./../models/cart');

const getAllCarts = async (req, res) => {
    try {
        const [data] = await cartModel.getAllCart();
        res.status(200).json({
            message: "Get All Cart Success",
            data,
        })
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: err
        })
    }
}

const addCart = async (req, res) => {
    const { body } = req;

    if (!body.id_product || !body.kuantitas) {
        res.status(400).json({
            message: "Anda mengirim data yang salah!",
            data: body
        })
    }

    try {
        await cartModel.addCart(body);
        res.status(201).json({
            message: "create new cart success",
            data: body,
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            serverMessage: err
        })
    }
}

const deleteCart = async (req, res) => {
    const { id_cart } = req.params;

    const [findCart] = await cartModel.findCart(id_cart);
    if (findCart.length === 0) {
        res.status(404).json({
            message: `Data dengan id_cart ${id_cart} tidak ditemukan !`
        })
        return false;
    }

    try {
        await cartModel.deleteCart(id_cart);
        res.status(201).json({
            message: `Data dengan id_cart ${id_cart} berhasil dihapus !`
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            serverMessage: err
        })
    }
}

module.exports = { getAllCarts, addCart, deleteCart };