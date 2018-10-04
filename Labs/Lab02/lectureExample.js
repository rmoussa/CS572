// setImmediate(function() {
//   console.log("world");
// },2000);
// console.log("Hello");

// var open = false;
// setImmediate(function() {
//     open = true;
// },2000);
// while(!open){}
// console.log("opened!");

// const add = (a, b) => {
//   // for(let i=0; i < 9e7; i++){
//   //     console.log(i);
//   // }
//   return setTimeout(() => {
//     console.log(a + b);
//   }, 5000);
// };
// console.log("Start");
// const A = add(1, 2);
// const B = add(2, 3);
// const C = add(3, 4);
// console.log("End!");

//P64
setTimeout(()=> {console.log('Timeout');},0);
setImmediate(()=>  {console.log('Imm');});
process.nextTick(()=> console.log('nextTick'));
