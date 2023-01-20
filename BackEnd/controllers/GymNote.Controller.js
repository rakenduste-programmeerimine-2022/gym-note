const mongoose = require("mongoose")

const GymNoteSchema = new mongoose.Schema({
    ownerName: String,
    noteDate: Date,
    noteID: String,
    exercise: String,
    reps: String,
    weight: String,
    failure: Boolean,
    notes: String
})

const GymNote = mongoose.model("Gymnotes", GymNoteSchema)

exports.create = async (req, res) => {
    const { ownerName, noteID, exercise, reps, weight, failure, notes } = req.params
    const gymNote = await GymNote.create({
        ownerName: ownerName,
        noteDate: Date.now(),
        noteID: noteID,
        exercise: exercise,
        reps: reps,
        weight: weight,
        failure: failure,
        notes: notes
    })

    res.send(gymNote)
}

exports.read = async (req, res) => {
    const GymNotes = await GymNote.find({ ownerName: req.params.owner }, { _id: 0, __v: 0 })
    res.send(GymNotes)
}