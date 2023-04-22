const express=require('express');
const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    likedPodcasts:[{
        type:ObjectId,ref:"PODCASTS"
    }]
})
mongoose.model('USERS',UserSchema)