const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const{secretKey}=require('../keys')
const USERS=mongoose.model('USERS')
module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status(422).json({error:'Cant authorize'})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,secretKey,(err,payload)=>{
        if(err){
        return res.status(422).json({error:'Cant authorize'})
        }
        const{_id}=payload;
        USERS.findById(_id).then(data=>{
            req.user=data
            next();
        })
    })

}