const express = require('express')
const mongoose = require('mongoose')
const { isStrongPassword } = require('validator')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const Schema = mongoose.Schema;

const Auth = new Schema({
   
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
    },
    expiresAt: {
        type: Date,
        default: null,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Password must be at least 8 characters long'], // Minimum length of 8 characters
        validate: {
            validator: function (value) {
                return isStrongPassword(value, {
                    minLowercase: 1, // At least 1 lowercase letter
                    minUppercase: 1, // At least 1 uppercase letter
                    minNumbers: 1, // At least 1 number
                });
            },
            message: 'Please enter a valid password. Password must contain uppercase,lowercase,numbers and a symbol',
        },
    },
    confirmPassword: { // Added field for confirming the password
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (value) {
                return value === this.password; // Compare with the password field
            },
            message: 'Password and Confirm Password must match',
        },
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
     // Hash the confirmPassword field if it is set
     if (this.confirmPassword) {
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
    }

    next();
})

const User = mongoose.model('User', Auth);
module.exports = User;