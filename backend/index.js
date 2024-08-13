console.log("works?");
const express = require('express')
const app = express()
app.listen(4000,()=>{
    console.log("Running on 4000");
})
app.get('/',(req,res)=>{
  res.send("heLLo from my api ");  
})
//hello from the other side....
