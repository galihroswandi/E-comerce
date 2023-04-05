const dbPool = require('../config/database');

const getAllCart = () => {
    const SQLQuery = "SELECT * FROM cart JOIN products ON cart.id_product=products.id_product";

    return dbPool.execute(SQLQuery);
}

const findCart = (id_cart) => {
    const SQLQuery = `SELECT * FROM cart WHERE id_cart='${id_cart}'`;

    return dbPool.execute(SQLQuery);
}

const addCart = (body) => {
    const SQLQuery = `INSERT INTO cart VALUES(null, '${body.id_product}', '${body.kuantitas}')`;

    return dbPool.execute(SQLQuery);
}

const deleteCart = (id_cart) => {
    const SQLQuery = `DELETE FROM cart WHERE id_cart='${id_cart}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = { getAllCart, addCart, findCart, deleteCart };