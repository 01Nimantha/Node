console.log("Hello world!");
// Writing File
const fs = require('fs');
fs.writeFile("output.txt","Writing File",(err)=>{
  if(err){
    console.log("Error occurred");
  }else{
    console.log("File writtten successfully");
  }
});