const mongoose = require("mongoose")
const Schema = mongoose.Schema

let schema = new Schema({
    imagePath: { type: String, required: true },
    Name: { type: String, required: true },
    description: { type: String, required: true },
    Quantity:{type:String,required:true},
    price: { type: Number, required: true },
    prescription:{type:String,required:true}
})

module.exports = mongoose.model("Product", schema)
