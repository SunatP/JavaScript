var fs = require("fs");

fs.writeFile('message.txt' ,'Update data by using node-appenddata' , function(err)
{
    if(err) console.log("Can't update file")
    console.log("File update")
});
console.log("End")