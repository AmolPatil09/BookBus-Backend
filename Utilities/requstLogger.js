const fs = require('fs');
const path = require('path');

const requestLogger = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(path.join(__dirname, 'request_logs.txt'), logMessage, (err) => {
    if (err) {
      console.error('Error writing to request log file:', err);
    }
  });
  next();
};

module.exports=requestLogger;