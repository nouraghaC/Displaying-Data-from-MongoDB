
const { MongoClient} =require("mongodb");
require("dotenv").config({path:"./config.env"})
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

const express= require('express')
const app=express()
const PORT=process.env.PORT || 3001 
app.listen(PORT,() => console.log("Server started"))
app.use(express.static("build"));
let db

async function run() {
  try {
    await client.connect();
    const collections = await client.db("dataset").collections()
    const result =await client.db("dataset").collection("contribuation").find().toArray()
    console.log(result)  
    // Find the first document in the collection
    app.get("/api/result",(req,res)=>{
      res.send(result);
    })
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
   
}
run().catch(console.error);


