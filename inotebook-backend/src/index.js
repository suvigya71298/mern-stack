const connectToMongo=require('./db/db_connect')
const express=require('express')

connectToMongo();

const app=express();
const port=8080;

app.get("/",(req,res)=>{
    res.send("Application is up and running")
})

app.listen(port,()=>{
    console.log("Application is running at "+port);
})
