const userService=require('../Service/userService')

let userController={};
const {validationResult } = require('express-validator');
userController.register= async(req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    const registerData=req.body;
    try {
    const register= await userService.register(registerData);
    res.send(register) ;
    } catch (error) {
       next(error) 
    }

}

userController.login= async(req, res,next) => { 
    const {emailId,password}=req.body;
    try {
    const {accessToken,refreshToken} =await userService.login(emailId,password);
    res.status(200)
    .cookie("accessToken",accessToken)
    .cookie("refreshToken",refreshToken)
    .json({"message":"login success"})
        
    } catch (error) {
        next(error)
    }

}

userController.logout= async(req, res,next) => { 
   const sessionId=req.cookies?.uId
   console.log("sessionId",sessionId);
    try {
    const logout=await userService.logout(sessionId);
    res.json({"message":"logout success"})
        
    } catch (error) {
        next(error)
    }

}

module.exports=userController;