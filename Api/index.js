const express = require("express");
const mySql = require("mysql2");

const api = express();
const port = 3000;
api.use(express.json());

api.get("/",(req,res)=>{
        res.status(200).json({ message: "Welcome to the API!",})
});


api.listen(port,()=>{
    console.log("The server is running on port number"+ port);
});