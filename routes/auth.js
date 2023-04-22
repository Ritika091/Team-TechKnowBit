const express=require('express');
const router=express.Router();
const cors=require('cors')
const mongoose=require('mongoose')
const USERS=mongoose.model('USERS')
const bcrypt=require('bcrypt')
router.use(cors())
router.post('/signup',(req,res)=>{
    const{email,userName,password}=req.body;
    if(!email || !userName || !password){
        return res.status(422).json({error:'One or more fields are missing'})
    }
    USERS.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:'User already exists'})
        }
        bcrypt.hash(password,10).then((hashedPass)=>{
            const user=new USERS({
                email,
                userName,
                password:hashedPass
            })
            user.save().then(user=>{res.status(200).json({message:'New user added successfully...'})})
            .catch(err=>console.log(err))
           
        })
    })
})
module.exports=router