//filesystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
const image=fs.readFileSync('car.jpg').toString("base64");
//console.log(image);
const client = new AipImageClassifyClient('17711755','0MujaqVrPda09ZV2WvnWhOUK','pLQkZlFpmrarSNahOiDWSmG8N2MUKz89');

client
.carDetect(image)
.then(function(result){
    console.log(result)
})
// AipImageClassifyClient


//console.log('Hello node');
//回调函数
//文件在磁盘里
//js在内存中运行 I/O操作
// fs.readFile('text.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// })









// var fs = require('fs');

// var image = fs.readFileSync("assets/example.jpg").toString("base64");

// // 调用车辆识别
// client.carDetect(image).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });

// // 如果有可选参数
// var options = {};
// options["top_num"] = "3";
// options["baike_num"] = "5";

// // 带参数调用车辆识别
// client.carDetect(image, options).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });;