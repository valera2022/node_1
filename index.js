//os is to work with operating systme
const os = require("os")
//fs is to work with files
const fs = require("fs")




// console.log(os)

// console.log(fs)
 fs.readFile("./about.txt",(err,data)=>{
    if(!err){
        console.log(data.toString())
    }
    else{
        console.log(err)
    }
 })

 console.log("who runs first")

//  fs.writeFile("./write.txt", "this is how we write files in node.js. side note: we can also update stuff",()=>{
//     console.log("file has been written")
//  })