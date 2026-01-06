const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema({
    service:String,
    date:String,
    time:String,
    name:String,
    email:String,
    number:String
})

const appointmentModel = mongoose.model("appointment",appointmentSchema)
module.exports = appointmentModel