const userRouter = require('express').Router();


const { SchemaValidateMiddleware } = require('../middlewares/schema-validate');
const {signUpSchema, loginSchema} = require('../services/joi-services');
const {
    addUser,
    userLogin
} = require('../controllers/user-controllers');



userRouter.post('/signup',(req,res,next) =>SchemaValidateMiddleware(req,res,next,signUpSchema), addUser);
userRouter.post('/login',(req,res,next) =>SchemaValidateMiddleware(req,res,next,loginSchema),userLogin);




module.exports = userRouter;