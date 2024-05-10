//http let us work with network request
const http = require("http")


const server = http.createServer((req,res)=>{
  
    res.end(JSON.stringify({message:"Hello World"}))
    // res.end()
     
  
    
})



server.listen(4000,"localhost",()=>{
    console.log("server is running")
})