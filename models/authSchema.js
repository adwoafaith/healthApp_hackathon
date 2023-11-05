const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const Schema = mongoose.Schema;

const Auth = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your full name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlenght: [8, 'Minimum password lenght should be 6 characters']
    },
    role:{
        type: String,
        enum: ['patient', 'doctor'],
        default: 'patient'

    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date
}, { timestamps: true })



//harshing the user password
Auth.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

const User = mongoose.model('User', Auth);
module.exports = User;