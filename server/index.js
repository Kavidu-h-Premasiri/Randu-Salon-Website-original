const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employees.js")
const appointmentModel = require('./models/Appointment.js')
const MessageModel = require('./models/Message.js')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee1')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err))

// Simple Login(first practice this)  
// app.post('/login',(req,res)=>{
//     const{email,password} = req.body
//     EmployeeModel.findOne({email:email})
//         .then(user=>{
//             if(user){
//                 if(user.password === password){
//                     res.json("success")
//                 }
//                 else{
//                     res.json("password is incorrect")
//                 }
//             }
//             else{
//                 res.json("user doesn't exists")
//             }
//         })
// })

//login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await EmployeeModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Email not registered"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user

        });

    } catch (err) {
        res.status(500).json({
            message: "Server error"
        });
    }
});


// simple Signup(first practice this)
// app.post('/',(req,res)=>{
//     EmployeeModel.create(req.body)
//     .then(employee=>res.json(employee))
//     .catch(err=>res.status(500).json(err))
// })

//signup
app.post('/',async(req,res)=>{
    const {name,email,password } = req.body;

    try{
        //check if email already exists
        const existingUser = await EmployeeModel.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"Email already exists"
            });
        }

        //create new user
        const newEmployee = await EmployeeModel.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message:"Signup successful",
            user:newEmployee
        });

    }catch(err){
        res.status(500).json({
            message:"Server error",
            error:err
        });
    }
})

// Appointment
app.post('/appointment',(req,res)=>{
    appointmentModel.create(req.body)
    .then(appointment=>res.json(appointment))
    .catch(err=>res.status(500).json(err))
})  

//simple Message
// app.post('/contact',(req,res)=>{
//     MessageModel.create(req.body)
//     .then(message=>res.json(message))
//     .catch(err=>res.status(500).json(err))
// })

//message
app.post('/contact',async(req,res)=>{

    const {name,email,message} = req.body
    
    try{
        const existingUser = await EmployeeModel.findOne({email});

        if(!existingUser){
            return res.status(400).json({
                message:"Invalid Email. Enter your login email"
            })
        }

        const newMessage = await MessageModel.create({
            name,
            email,
            message
        })

        res.status(201).json({
            message:"Send message successful",
            user:newMessage
        })

    }catch(err){
        res.status(500).json({
            message:"Server error",
            error:err
        })
    }
})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Server is running on port", PORT)
})