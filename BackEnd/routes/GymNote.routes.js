const express = require('express')
const router = express.Router()
const GymNoteController = require('../controllers/GymNote.Controller')


const getMiddleware = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}

router.get("/:ownerName", GymNoteController.read)
router.post('/:ownerName/:noteID/:exercise/:reps/:weight/:failure/:notes', GymNoteController.create)

module.exports = router