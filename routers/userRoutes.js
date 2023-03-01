const userRouter = require('express').Router();

const {
    addUser,
    userLogin
} = require('../controllers/userControllers');

userRouter.post('/singup', addUser);
userRouter.post('/login',userLogin);




module.exports = userRouter;