const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [3, "{PATH} must have at least 3 characters"]
        },
        price:{
            type: Number,
            required: [true, "{PATH} is required"],
            min:[0, "must be valid"]
        },
        description:{
            type:String,
            required:[true, "{PATH} is required"],
            minLength:[8, "{PATH} must have at least 8 characters"]
        }
    },{timestamps:true}
)
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product