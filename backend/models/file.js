const mongoose = require('mongoose')
const express = require('express')

const Schema = mongoose.Schema;

const FileSchema = new Schema({
    myFile: {
        type: String
    },

  

})

const File = mongoose.model("File", FileSchema)

module.exports = File;