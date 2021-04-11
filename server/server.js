const express=require('express');

const app=express();


app.use('/',(req,res,next)=>{
    res.send("Hello from the server!!")
})

const port=5000;
app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})