const mysql = require("mysql2");
const express = require('express');
const router = express.Router();
const AuthRouter = require("./routes/AuthRoute");

const app = express();







app.use("api/auth",AuthRouter);
// Check connection


app.listen("8080",(req,res)=>{
    console.log("server is running on port 8080");
;})