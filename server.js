const express=require("express");
const app=express();
const db_connect=require("./db_connect");
require("dotenv").config({path: "./vars/.env"});
// dotenv.config({path: "./vars/.env"});
app.use(express.json());
app.use("/person",require("./routes/person"));
db_connect();
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"));