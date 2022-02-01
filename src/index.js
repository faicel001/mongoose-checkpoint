const express = require("express")
const mongoose = require("mongoose")
const personController= require("./controllers/persons.js")
mongoose.connect('mongodb+srv://faicel123:faicel123@cluster0.kzmeo.mongodb.net/ContactDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("db connected with succes");
        const app = express(); 
        app.use(express.json())
        app.get("/persons",personController.findPersons);
        app.post("/persons/create",personController.createPerson);
        app.post("/personsbyid/:id",personController.findPersonId);
        app.get("/personsbyfind",personController.findPerson);
        app.post("/fiiinnddd",personController.findFood);
        app.post("/personsbyidremove/:id",personController.findPersonIdRomove);
        app.delete("/deletemany/:name",personController.deleteManyPersons);
        app.post("/updateuser/:id",personController.updatePerson);
        app.post("/updateuserid/:id",personController.findByIdUpdate);
        
        const port = 8000
        app.listen(port, () => {
            console.log("serveur is runing")
        })
        
    })
    .catch((error) => {
        console.log("connect to db failed")
        console.log(error);
    })


