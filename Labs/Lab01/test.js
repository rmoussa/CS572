// setImmediate(function() {
//   console.log("world");
// },2000);
// console.log("Hello");


var open = false;
setImmediate(function() {
    open = true;
},2000);
while(!open){}
console.log("opened!");
