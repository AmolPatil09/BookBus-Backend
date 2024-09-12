const connection=require('../Utilities/connection')
let userModel={};

userModel.checkUser=async(emailId)=>{
    const model=await connection.getUserCollection();
    const user=await model.findOne({emailId:emailId}) 
    return user;
}
userModel.register=async(register)=>{
    const model=await connection.getUserCollection();
    const user=await model.create(register)
    return user;
}
module.exports=userModel;