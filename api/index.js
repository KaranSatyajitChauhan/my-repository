const express = require("express");
const mysql = require("mysql2");

//const express = required("express");
//const mysql = require("mysql2");
//promise ---> external resource you will use promise

const api = express();
const port = 3000;

api.use(express.json());


api.get("/",(req,res) => {
    res.status().json({message:"API is running"})
});

api.listen(port,() => {
    console.log('The server is runing, PORT ${port}');
});

