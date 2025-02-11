const express = required("express");
const mysql = require("mysql/promise");
//promise ---> external resource you will use promise

const api = express();
const port = 3000;

api.use(express.json());


api.get("/",(req,res) => {
    res.status().json({message:"API "})
})

