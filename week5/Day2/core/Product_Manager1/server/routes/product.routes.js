const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/products", ProductController.displayAllProducts)
    app.get("/api/products/:id", ProductController.getOneProduct)
    app.patch("/api/products/edit/:id", ProductController.updateProduct)
    app.delete("/api/products/delete/:id", ProductController.deleteProduct)

}
 