const mongoose = require("mongoose")
const schema = new mongoose.Schema(
    {
        name: 
        {type:String,
        required:true},
        age: Number,
        favoriteFoods : [{type:String}]
    }
)
module.exports = mongoose.model("Person", schema)