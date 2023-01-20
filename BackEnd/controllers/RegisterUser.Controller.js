const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    about: String,
    profilePicture: String,
    password: String
})

const UserInfo = mongoose.model("UserInfo", UserSchema)

exports.create = async (req, res) => {
    const {userName, email, password} = req.body
    const userInfo = await UserInfo.create({
        userName: userName,
        email: email,
        password: bcrypt.hashSync(password, saltRounds)
    })

    res.send(userInfo)
}
