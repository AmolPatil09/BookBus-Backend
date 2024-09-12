const fs = require('fs');
const path = require('path');

const errorLogger = (err, req, res, next) => {
  if(err) {
      const logMessage = `${new Date().toISOString()} - ${err.stack}\n`;
      fs.appendFile(path.join(__dirname, 'error_logs.txt'), logMessage, (error) => {
        if(error){
          console.error('Error writing to error log file:', error);
        }

    })
     if(err.status){
      res.status(err.status)
     }
     else{
      res.status(500)
     }
    res.json({"message":err.message})
  };
  next(err);
}
  module.exports=errorLogger;