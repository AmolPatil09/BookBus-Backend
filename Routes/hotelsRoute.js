const express = require('express');
const router = express.Router();

const validation=require('../Utilities/validation')


router.get('/hotels',(req,res,next)=>{
    res.send("hotels")
})






module.exports = router;