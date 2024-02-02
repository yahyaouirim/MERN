// import the model here

const Jokes = require("../models/jokes.model")
//++++++++++++++++++++++READ ALL+++++++++++++++++++++++
module.exports.getAllJokes= (req, res)=>{
    Jokes.find()
    .then(allJokes =>{res.json(allJokes)})
    .catch(err =>{res.json(err)})
}
//++++++++++++++++++++get one joke+++++++++++++++++++
module.exports.getOneJoke= (req,res) =>{
    Jokes.findOne({_id:req.params.id})
    .then(oneJoke => {res.json(oneJoke)})
    .catch(err => {res.json(err)})
}
//++++++++++++++++++++++ get Random joke+++++++++
module.exports.getRandomJoke = (req, res) => {
        Jokes.countDocuments().exec((err, count) => {
        if (err) {
            return res.status(500).json({ error: 'Error occurred while counting documents.' });
        }
    
        const randomIndex = Math.floor(Math.random() * count);
    
        Jokes.findOne().skip(randomIndex)
            .then((randomJoke) => {
            if (!randomJoke) {
                return res.status(404).json({ error: 'No joke found.' });
            }
            res.json(randomJoke);
            })
            .catch((err) => {
            res.status(500).json({ error: 'Error occurred while fetching random joke.' });
            });
        });
    };
//++++++++++++++++++++ create a joke +++++++++++++++++
module.exports.createJoke = (req,res) =>{
    Jokes.create(req.body)
    .then((firstjoke) => {
        console.log(firstjoke)
        res.json(firstjoke)})
    .catch((err) => {res.json(err)})
}
//+++++++++++++++++++++++++++ update joke+++++++++++++++++
module.exports.updateJoke =(req,res) =>{
    Jokes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedJoke =>{res.json(updatedJoke)})
    .catch(err =>{res.json(err)})
}
//+++++++++++++++++++ delete joke++++++++++++++
module.exports.deleteJoke= (req,res) =>{
    Jokes.deleteOne({_id: req.params.id})
    .then( resultat => {res.json(resultat)})
    .catch(err => {res.json(err)})
}