// const users = require("../utils/users");
const {User} = require ("../DB_connection");
require("dotenv").config();
const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const login = async(req, res)=>{
    const {email, password} = req.query;
    try {
        if(email && password){
            if (DB_PASSWORD === password && DB_EMAIL === email)return res.status(200).json({access: true})
            if(!password)res.status(403).send("Contraseña incorrecta")
        }
        return res.status(400).send("Faltan datos");
        }catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports ={
    login
}

// const login =(req, res)=>{
//     const {email, password} = req.query;

//     const userFound = users.find((user) => user.email === email && user.password === password)

//     return userFound 
//     ? res.status(200).json({access: true})
//     : res.status((404).json({access:false}))
// }