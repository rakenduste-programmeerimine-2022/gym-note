const express = require('express')
const router = express.Router()
const RegisterUserController = require('../controllers/RegisterUser.Controller')
const bodyParser = require('body-parser');

const getMiddleware = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}

router.use(bodyParser.json());
router.post('/', RegisterUserController.create)

module.exports = router
