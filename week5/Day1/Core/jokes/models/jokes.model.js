const mongoose = require("mongoose");
const jokeSchema = new mongoose.Schema({
    setup:
        {type:String,
        required: [true, "{PATH} is required"],
        minLength: [10, "{PATH} must have at least 10 characters"]
    },

    punchline: {
        type:String,
        required:[true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 characters"]
    }
}, {timestamps: true})
const Jokes = mongoose.model("Jokes", jokeSchema)
module.exports= Jokes