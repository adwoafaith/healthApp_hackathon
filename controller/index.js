const express = require('express')

const hello = (req,res) =>{
    return res.status(200).json({msg: 'hello world'})
}

module.exports = hello;