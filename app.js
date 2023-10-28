const express= require("express");
const app=express();
require("dotenv").config();
const port=process.env.port|| 3000;

app.use(express.json());
//const router= express.Router();
const blog =require("./routes/blog");

app.use("/api/v1",blog);

const connectwithdb= require("./config/database");
connectwithdb();

app.listen(port ,() => {
    console.log(`App is working At ${port} `);
})  
    
app.get("/", (req,res) =>
{
     res.send("App is working ")
});
