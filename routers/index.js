const express = require('express')
const router = express.Router()
const hello = require('../controller')
const userAuth = require('../controller/user')

router.route('/hello').get(hello)
router.post('/signup',userAuth.signUP)
router.post('/login',userAuth.login)
module.exports = router;