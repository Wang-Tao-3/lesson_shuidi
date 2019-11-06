const fs = require('fs');
const image = fs.readFileSync('./cp.jpg').toString("base64");
const AipOcrClient = require('baidu-aip-sdk').ocr;
const client = new AipOcrClient('17712433','UDtOTzH8eF29H2Cnqqqo8NHA','YtgVk45lsubR7XoslyIglgMudChbDPpt');

const options = {};
options["multi_detect"] = "true";

client
.licensePlate(image)
.then(function(result){
    
    console.log(result);
})