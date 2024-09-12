const mongoose =require('mongoose');
const userSchema=new mongoose.Schema({
    firstName:{
      type:String,
      require:true
  
     },
     lastName:{
        type:String,
        require:true
     },
    
     userName:{
      type:String,
      unique:true,
      require:true
     },
     emailId:{
        type:String,
        unique:true,
        require:true
        
       },
     password:{
        type:String,
        require:true
        
       },

})

const sessionSchema=new mongoose.Schema({
   userId:{
      type:String,
      require:true
  
     },
     sessionId:{
        type:String,
        require:true
     },
},{timestamps:true}
)
const connection={}
const url="mongodb://127.0.0.1:27017/Fooders"
const connect=async(docName,dacName)=>{
   return (await mongoose.connect(url,{useNewUrlParser:true})).model(docName,dacName)
}

connection.getUserCollection=async()=>{
    try {
     return await connect('users',userSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }
 connection.getSeesionCollection=async()=>{
   try {
    return await connect('session',sessionSchema)
   } catch (err) {
        let error =new Error("Could not connect database");
        error.status=500;
        throw error
   
   }
}

 module.exports=connection