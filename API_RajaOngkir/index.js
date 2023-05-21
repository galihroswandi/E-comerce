require('dotenv').config(); // Memuat variabel lingkungan dari file .env
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

// Get All Provinces
app.get('/provinces', async (req, res) => {
    try {
        const response = await axios.get('https://api.rajaongkir.com/starter/province', {
            headers: {
                key: process.env.RAJAONGKIR_API_KEY,
            },
        });
        res.set('Access-Control-Allow-Origin', '*');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

// Get All City Where id provinsi
app.get('/cities/:provinceId', async (req, res) => {
    try {
        const response = await axios.get(`https://api.rajaongkir.com/starter/city?province=${req.params.provinceId}`, {
            headers: {
                key: process.env.RAJAONGKIR_API_KEY,
            },
        })
        res.set('Access-Control-Allow-Origin', '*');
        res.json(response.data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
