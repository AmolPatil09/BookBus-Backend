const { body } = require('express-validator');
const validation={}

validation.ValidatRegister=[
    body('firstName').notEmpty().withMessage('First name is required').isAlpha().withMessage('First name must contain only alphabets'),
    body('lastName').notEmpty().withMessage('Last name is required').isAlpha().withMessage('Last name must contain only alphabets'),
    body('userName').notEmpty().withMessage('Username is required').matches(/^[A-Za-z0-9]+$/).withMessage('Username must contain alphabets, numbers, underscores, or hyphens'),
    body('emailId').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
  ]

  module.exports=validation