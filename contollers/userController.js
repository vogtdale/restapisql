const db = require("../dbconfig")

const getAllUsers = (req,res) => {
    db.query('SELECT * from users', (err, data) => {
        if (err) {
            console.log(err);
        }else {
            res.status(200).send(data)
        }
    })
}

const getUserbyId = (req,res) => {
    const {id} = req.params
    db.query('SELECT * from users where userid=?',[id], (err,data) => {
        if (err) {
            console.log(err);
            
        }else {
            res.status(200).send(data)
        }
    })
}

const createUser = (req,res) => {
    const {name,email} = req.body

    db.query('INSERT INTO users set name=?, email=?', [name,email], (err,data) => {
        if (err) {
            console.log(err);

        }else {
            res.status(200).send({msg: "User created", data: data})
        }
    })
    
}

const deleteUser = (req,res) => {
    const {id} = req.params
    db.query('DELETE FROM users WHERE userid=?', [id], (err,data) => {
        if (err) {
            console.log(err);
        }else {
            res.status(200).send({msg: "Succes", data: data})
        }
    })
}

module.exports = {
    getAllUsers,
    getUserbyId,
    createUser,
    deleteUser
}