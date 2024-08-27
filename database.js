const {
    createPool
} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"Manh54321@",
    database:"IOT",
    connectionLimit: 4
})

pool.query(`select * from sensor_data`, (err, result, fields)=>{
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})


