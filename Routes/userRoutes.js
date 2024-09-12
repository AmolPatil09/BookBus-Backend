const express = require('express');
const router = express.Router();
const {register,login,logout}=require('../Controllers/userController')
const validation=require('../Utilities/validation')


router.post('/register',validation.ValidatRegister,register)

router.post('/login',login)

router.get('/logout',logout)





module.exports = router;