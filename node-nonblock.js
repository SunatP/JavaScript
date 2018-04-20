var fs = require("fs");

fs.readFile('message.txt' , function (err , data)
{
    if(err) return console.log("error can't load data")
    console.log(data.toString());
});
 
console.log("End")