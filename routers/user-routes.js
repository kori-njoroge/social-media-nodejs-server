const userRouter = require('express').Router();

const {
    addUser,
    userLogin
} = require('../controllers/user-controllers');

userRouter.post('/singup', addUser);
userRouter.post('/login',userLogin);




module.exports = userRouter;