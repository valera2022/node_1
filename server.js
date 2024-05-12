//http let us work with network request
const http = require("http")

const computers = {computers:[
    "mac","lenovo","hp","dell","msi"
]}
const food = {
    food: ["pizza","apples", "cake","rice","cookies"]
    
}


const server = http.createServer((req,res)=>{
    if(req.url === "/computers"){
        res.end(JSON.stringify(computers))
        
    }

    else if(req.url === "/food"){
        res.end( res.end(JSON.stringify(food)))

    }
    else {
        console.error(err)
    }




  
   
    // res.end()
     
  
    
})



server.listen(4000,"localhost",()=>{
    console.log("server is running")
})