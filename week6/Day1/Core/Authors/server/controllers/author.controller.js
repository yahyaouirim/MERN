// the controller does the CRUD for the DB
// import the model here
const Author = require("../models/author.model")

module.exports ={

// READ ALL
findAllAuthors : (req, res) => {
Author.find()
        .then((allAuthors) => {
            console.log(">>>Author.find()  >>>", allAuthors)
            res.status(200).json(allAuthors)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
},

// READ ONE 
findOneAuthor : (req, res) => {
Author.findOne({ _id: req.params.id })
        .then(oneSinglAuthor => {
            res.status(200).json(oneSinglAuthor)
        })
        .catch(err => {
            res.status(400).json(err)
        })
},


// CREATE 
createNewAuthor : (req, res) => {
Author.create(req.body)
        .then((oneAuthor) => {
            console.log(">>>Author.create()= >>>", oneAuthor)
            res.status(200).json(oneAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
},

// UPDATE
updateExistentAuthor : (req, res) => {
Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateAuthor => {
            res.status(200).json(updateAuthor)
        })
        .catch(err => {
            res.status(400).json(err)
        })
},



// DELETE
deleteAnExistingAuthor : (req, res) => {
Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
}