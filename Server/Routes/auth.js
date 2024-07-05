const express = require('express')
const UserModel = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const router = express.Router()

router.post('/register', async (req, res) => {
    const {username, password, continent, country, language} = req.body;
    const user = await UserModel.findOne({username})
    if (user) {
        return res.json({message: "user existed"})
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new UserModel({username, password: hashPassword, continent, country, language})
    await newUser.save()
    return res.json({message: "record saved"})

})

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if (!user) {
        return res.json({message: "Wrong Credentials"})
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.json({message: "Wrong Credentials"})
    }
    const token = jwt.sign({id: user._id}, "secret");
    await res.cookie("token", token);
    return res.json({message:"Successfully Login", id: user._id});
})


module.exports = router