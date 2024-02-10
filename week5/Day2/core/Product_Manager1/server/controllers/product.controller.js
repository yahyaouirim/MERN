const Product = require("../models/product.model")

module.exports={
    createProduct:(req,res)=> {
        Product.create(req.body)
        .then((oneproduct) => {
            console.log(oneproduct)
            res.status(200).json(oneproduct)
        })
        
        .catch((err) => {
            res.status(400).json("something went wrong", err)
    
        })
    },
    
    displayAllProducts:(req, res) =>{
        Product.find()
        .then((allProducts) =>{
            res.status(200).json(allProducts)

        })
        .catch((err) => {
            res.status(400).json("something went wrong", err)

        })

    },

    getOneProduct:(req,res) =>{
        Product.findOne({_id:req.params.id})
        .then((oneProduct)=>{
            res.status(200).json(oneProduct)
        })
        .catch((err) => {
            res.status(400).json("something went wrong", err)
        })
    },
    updateProduct:(req,res) =>{
        Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then((updatedProduct) =>{
            console.log("Product updated")

            res.status(200).json(updatedProduct)
        })
        .catch((err) =>{
            res.status(400).json("something went wrong on update", err)
        })

    },

    deleteProduct:(req,res) => {
        Product.deleteOne({_id: req.params.id})
        .then((deletedProduct) =>{
            console.log("Product deleted")
            res.status(200).json(deletedProduct)
        })
        .catch((err)=>{
            res.status(400).json("Something went wrong on delete", err)
        })
    }


}