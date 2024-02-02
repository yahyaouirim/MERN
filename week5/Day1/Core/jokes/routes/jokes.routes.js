const JokesController = require("../controllers/jokes.controller")
module.exports= app =>{
    app.get("/api/jokes", JokesController.getAllJokes)
    app.get("/api/jokes/:id", JokesController.getOneJoke)
    app.get("/api/jokes/random", JokesController.getRandomJoke)

    app.post("/api/jokes", JokesController.createJoke)
    app.patch("/api/jokes/:id", JokesController.updateJoke)
    app.delete("/api/jokes/:id", JokesController.deleteJoke)
}
