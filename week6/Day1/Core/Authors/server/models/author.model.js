// import the mongoose lib to build the schema
const mongoose = require("mongoose");
// the model - the rules  the entries need to follow

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    }
}, { timestamps: true })

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author