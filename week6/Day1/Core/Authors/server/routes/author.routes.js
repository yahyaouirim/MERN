const AuthorController = require("../controllers/author.controller")


module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/authors/:id", AuthorController.findOneAuthor)
    app.patch("/api/authors/:id", AuthorController.updateExistentAuthor)
    app.post("/api/authors/new", AuthorController.createNewAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAnExistingAuthor)
}