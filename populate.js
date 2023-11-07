const express = require('express')
const connect = require('./database/connect')
const mongoose = require('mongoose')
const teachersJson = require('../data/teachers.json')
const Teachers = require('../models/TeachersSchema')
require('dotenv').config()

const start = async () => {
    try {
        await connect(process.env.DATABASE_CONNECTION);
        await Teachers.deleteMany();
        await Teachers.create(teachersJson);
        console.log('sucess')
        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start()