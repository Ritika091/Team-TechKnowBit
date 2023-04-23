const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {mongoURL}=require('./keys')
const cors=require('cors')
const path=require('path')
app.use(cors())
app.use(express.json())

mongoose.connect(mongoURL)
require('./models/userModel')
require('./models/contentModel')
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb')
})
mongoose.connection.on('error',()=>{
    console.log('Couldnt connect to mongodb')
})
app.use(require('./routes/auth'))
app.use(require('./routes/createPodcasts'))
app.use(express.static(path.join(__dirname,'./frontend/build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'),
    function(err){
        res.status(500).send(err)
    }
    );
})
app.listen(5000||process.env.port,()=>{
    console.log('Server is active....')
})