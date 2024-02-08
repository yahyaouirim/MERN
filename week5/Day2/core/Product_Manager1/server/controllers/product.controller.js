const Product = require("../models/product.model")

module.exports={
    createProduct:(req,res)=> {
        Product.create(req.body)
        .then((oneproduct) => {
            console.log(oneproduct)
            res.json(oneproduct)})
        .catch(err => {res.json(err)})
        },
    
    displayAllProducts:(req, res) =>{
        Product.find()
        .then((allProducts) =>{
            res.json(allProducts)

        })
        .catch((err) => {
            console.log("something went wrong",err)

        })

    },

    getOneProduct:(req,res) =>{
        Product.findOne({_id:req.params.id})
        .then((oneProduct)=>{
            res.json(oneProduct)
        })
        .catch((err) => {
            console.log("something went wrong", err)
        })
    }


}