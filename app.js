const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {mongoURL}=require('./keys')
const cors=require('cors')
app.use(express.json())
app.use(cors())
mongoose.connect(mongoURL)
require('./models/userModel')
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb')
})
mongoose.connection.on('error',()=>{
    console.log('Couldnt connect to mongodb')
})
app.use(require('./routes/auth'))
app.get('/',(req,res)=>{
    res.send('Hello');
})
app.listen(5000||process.env.port,()=>{
    console.log('Server is active....')
})