const fs =require("fs")
// fs.writeFileSync("./text.txt","i am sibun") //Synchronous call...

// Async.....
// fs.writeFile("./text.txt","i am Ak mohanty Async",()=>{})

    const result=fs.readFileSync('./contact.txt','utf-8')
    console.log(result);
    