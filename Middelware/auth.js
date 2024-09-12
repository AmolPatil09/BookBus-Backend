
// const sessionService=require('../Service/sessionService')
const jwt = require('jsonwebtoken');

const auth={}
auth.restrictToLoggedinUserOnly=async(req, res, next)=> {
try {
  const accessToken=req.cookies?.accessToken
  console.log(accessToken);

  if (!accessToken) {
    const error=new Error("unathorized user")
    error.status=400
    throw error 
  }
  // const user = await sessionService.getSession(sessionId)
  const verified = jwt.verify(accessToken, process.env.JWT_SECRETE_KEY_ACCESS_TOKEN,);

  if (!verified) {
    return res.status(401).send("Access Denied");
  }
  next();
} catch (error) {
  next(error)
}
}

module.exports =auth;