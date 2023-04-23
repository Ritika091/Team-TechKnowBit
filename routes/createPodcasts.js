const express=require('express')
const router=express.Router()
const cors=require('cors')
const mongoose=require('mongoose')
const PODCASTS=mongoose.model('PODCASTS')
const VerifyLogin = require('../middlewares/VerifyLogin')
router.use(cors())
router.get('/podcasts',VerifyLogin,(req,res)=>{
    PODCASTS.find()
    .sort({id:-1})
    .then(data=>
        {
            return res.status(200).json(data)
        })
        .catch(err=>console.log(err))
})
router.post('/createpodcasts',VerifyLogin,(req,res)=>{
const{title,description,category,type,speaker,audioFile,videoFile}=req.body
if(!title || !description || !category || !type || !speaker){
    return res.status(422).json({error:'Insufficient data'})
}
if(!audioFile && !videoFile){
    return res.status(422).json({error:"No file attached"})
}
if(audioFile && !videoFile){
    const podcasts=new PODCASTS({
        title,
        description,
        category,
        type,
        speaker,
        audioFile
    })
    podcasts.save().then(data=>{
        return res.status(200).json({message:"Podcast added successfully"})
    })
    .catch(err=>console.log(err))
}
if(!audioFile && videoFile){
    const podcasts=new PODCASTS({
        title,
        description,
        category,
        type,
        speaker,
        videoFile
    })
    podcasts.save().then(data=>{
        return res.status(200).json({message:"Podcast added successfully"})
    })
    .catch(err=>console.log(err))
}
})

module.exports=router