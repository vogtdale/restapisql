const mysql = require("mysql")

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

db.connect((err) => {
    !err ? console.log('Db Connected') : console.log("Db connection failed \n: " + JSON.stringify(err, undefined, 2));
})

module.exports = db