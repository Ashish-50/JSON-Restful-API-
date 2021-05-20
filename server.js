const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT ||4004;

const app = express();

mongoose.connect('mongodb://localhost/subscribers',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connection to database succefully..")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json()) // to read json files


const subscribersrouter = require('./routes/subscribers')
app.use('/subscribers',subscribersrouter    )

 

app.listen(port,()=>{console.log("server started at 4004")})