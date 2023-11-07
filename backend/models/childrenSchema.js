const mongoose = require('mongoose')
const express = require('express')
const Schema = mongoose.Schema;

const ChildSchema = new Schema ({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    gender:{
        type: String
    },
    class:{
        type:String
    }
    
})

const Child = mongoose.model("Child",ChildSchema)
module.exports = Child;