const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const ContactModel = mongoose.model("message",messageSchema)
module.exports = ContactModel