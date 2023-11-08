const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const hello = require('../controller')
const userAuth = require('../controller/user')
const upload = require('../fileMiddleware/upload')
const addFile = require('../controller/Myfiles')

router.get('/child', controller.findChild)
router.post('/forgotPassword', userAuth.forgotPassword)
router.patch('/resetPassword/:token', userAuth.resetPassword)
router.get('/hello', controller.hello)
router.post('/signup', userAuth.confirmOTP, userAuth.signUP)
router.post('/verify', userAuth.genOTP)
router.post('/login', userAuth.login)
router.post('/addFile', upload.single('Myfile'), addFile)

module.exports = router;