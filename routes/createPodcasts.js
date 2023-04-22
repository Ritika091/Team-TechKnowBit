const express=require('express')
const router=express.Router()
const cors=require('cors')
const VerifyLogin = require('../middlewares/VerifyLogin')
router.use(cors())
router.get('/podcasts',(req,res)=>{
    res.send('My podcasts')
})
router.post('/createpodcasts',VerifyLogin,(req,res)=>{
    res.send('Create!')
})
module.exports=router