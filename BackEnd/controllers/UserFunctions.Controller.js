const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserInfo = mongoose.model("UserInfo", UserSchema);

exports.create = async (req, res) => {
    const {userName, email, password} = req.body
    const existingUser = await UserInfo.findOne({ $or: [{ userName }, { email }] });
    if (existingUser) {
        return res.status(400).send({ message: 'Username or email already exists' });
    }
    const userInfo = await UserInfo.create({
        userName: userName,
        email: email,
        password: bcrypt.hashSync(password, saltRounds)
    })
    res.send(userInfo)
}

exports.login = async (req, res) => {
    const {userName, password} = req.body;
    // Find the user in the database
    const user = await UserInfo.findOne({ userName });
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    // Compare the password with the hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid password' });
    }
    // If the username and password are correct, return the user
    res.send(user);
}
