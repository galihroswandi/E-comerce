const express = require('express');
const router = express.Router();

const cartController = require('./../controller/cart');

// Menambahkan Cart
router.post('/', cartController.addCart);

// Menampilkan cart
router.get('/', cartController.getAllCarts);

// menghapus cart
router.delete('/:id_cart', cartController.deleteCart);

module.exports = router;