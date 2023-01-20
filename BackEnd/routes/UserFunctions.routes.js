const express = require('express')
const router = express.Router()
const RegisterUserController = require('../controllers/UserFunctions.Controller')
const bodyParser = require('body-parser');

const getMiddleware = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}

router.use(bodyParser.json());
router.post('/register/', RegisterUserController.create)
router.post('/login/', RegisterUserController.login)

module.exports = router
