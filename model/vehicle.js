
const mongoose= require("mongoose");

const vehicleschema= new mongoose.Schema({
    v_type: String,
    description: String,
    engine: String,
    color: String
})

module.exports= mongoose.model("vehicle",vehicleschema);