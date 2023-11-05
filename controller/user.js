const express = require('express')
const User = require('../models/authSchema')
const bcrypt = require('bcrypt')

const handleError = (err) => {
    let errors = { email: "", password: "", name: "" };

    //handling duplicate errors
    if (err.code === 11000)
        return { message: "This email is already registered" }

    //validating errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;

        });
    }
    return { message: errors.password, message: errors.name, message: errors.email }
}

const signUP = async (req, res) => {
    const { name, email, password,role } = req.body;
    try {
        const user = await User.create({ name, email, password,role });
        if (user) {
            res.status(200).json({ msg: 'User created sucessfully' })
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({ ...handleError(err) })
    }

}

const login = async (req, res) => {
    const {email,password} = req.body;
    try {
        const notUser = !email || ! password
        if (notUser){
            return res.status(400).json({message:`User does not exist`})
        }
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json({message:"Login not sucessful", error:"user not found"})
        }
        else{
            bcrypt.compare(password, email, (err, result) =>{
                if (err) return next(err);
                if (result){
                    let token = genToken ({email, password})
                    return res.status(200).json({
                        message:"login sucessful",
                        token,
                    })

                }else{
                    return res.status(400).json({message:"Login sucessful"})
                }
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:"An error occured",
            error: error.message
        })
        
    }
}

module.exports = {
    handleError,
    signUP,
    login
}