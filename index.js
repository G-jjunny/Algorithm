let input = require("fs").readFileSync("example.txt").toString().split("\r\n");
var initialTime = input[0].split(" ");

var hour = initialTime[0];
var min = initialTime[1];
var addMin = parseInt(input[1]);

console.log(initialTime);
