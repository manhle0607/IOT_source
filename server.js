const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Manh54321@",
    database: "IOT",
    connectionLimit: 6
});

// API endpoint để lấy dữ liệu từ bảng `sensor_data`
app.get('/api/sensor_data', (req, res) => {
    pool.query('SELECT * FROM sensor_data', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// API endpoint để lấy dữ liệu từ bảng `device_history`
app.get('/api/device_history', (req, res) => {
    pool.query('SELECT * FROM device_history', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});



// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
