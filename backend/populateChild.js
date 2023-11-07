const express = require('express')
const connect = require('../backend/db/index')
const mongoose = require('mongoose')
const ChildJson = require('../backend/child.json')
const Child = require('../backend/models/childrenSchema')
require('dotenv').config()

const start = async () => {
    try {
        await connect(process.env.DATABASE_CONNECTION);
        await Child.deleteMany();
        await Child.create(ChildJson);
        console.log('sucess')
        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start()