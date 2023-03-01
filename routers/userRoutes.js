const userRouter = require('express').Router();

const {
    addUser,
    userLogin
} = require('../controllers/userControllers');

userRouter.post('/singup', addUser);
userRouter.post('/login',userLogin);




modele.exports = userRouter;