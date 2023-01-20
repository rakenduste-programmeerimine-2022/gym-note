const mongoose = require("mongoose")

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
        password: password
    })

    res.send(userInfo)
}