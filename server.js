const express = require('express');
const app = express();

require('dotenv').config()


app.use(express.urlencoded({extended:true}));
app.use(express.json());

// code
app.get('/',(req,res) =>{
    res.json({message: 'Welcome to Social media back end'})
})


const port = process.env.PORT || 4040;
app.listen(port,()=>{`Server running on port ${port}`})