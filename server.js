const express = require('express');
const app = express();
require('dotenv').config();


// files
const userRouter = require('./routers/user-routes')


app.use(express.urlencoded({extended:true}));
app.use(express.json());



// code
app.get('/',(req,res) =>{
    res.json({message: 'Welcome to Social media back end'})
})

app.use('/users',userRouter);



const port = process.env.PORT || 4040;
app.listen(port,()=>{ console.log(`Server running on port ${port}`)})