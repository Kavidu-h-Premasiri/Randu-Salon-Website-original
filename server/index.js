const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employees.js")
const appointmentModel = require('./models/Appointment.js')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee1')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err))

// Login  
app.post('/login',(req,res)=>{
    const{email,password} = req.body
    EmployeeModel.findOne({email:email})
        .then(user=>{
            if(user){
                if(user.password === password){
                    res.json("success")
                }
                else{
                    res.json("password is incorrect")
                }
            }
            else{
                res.json("user doesn't exists")
            }
        })
})

// Signup
app.post('/',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err=>res.status(500).json(err))
})

// Appointment
app.post('/appointment',(req,res)=>{
    appointmentModel.create(req.body)
    .then(appointment=>res.json(appointment))
    .catch(err=>res.status(500).json(err))
})  

const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Server is running on port", PORT)
})