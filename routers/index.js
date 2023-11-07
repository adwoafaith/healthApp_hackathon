const express = require('express')
const router = express.Router()
const hello = require('../controller')
const userAuth = require('../controller/user')

router.get('/hello',hello)
router.post('/signup', userAuth.confirmOTP, userAuth.signUP)
router.post('/verify', userAuth.genOTP)
router.post('/login', userAuth.login)

module.exports = router;