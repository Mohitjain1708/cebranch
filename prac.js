// function aa(){
//     console.log("first");
// }
// (function(){
//     console.log("second")
// })();
// let b= ()=> {
//     console.log("third");
// }
// function rollnumber(num,delay,nextroll){
//     setTimeout(()=>{
//         console.log("Roll no is",num);
//         if(nextroll) nextroll();
//     },delay)
// }
// rollnumber(1,1000,()=>{
//     rollnumber(2,2000,()=>{
//         rollnumber(3,3000)
//     })
// })
// const promise=new Promise(function(resolve,reject){
//     console.log("My first Promise")
//     resolve("resolved")
// });
// promise.then(()=>{
//     console.log("my first then")
// }).catch(()=>{
//     console.log("my first catch")
// })

// function getRoll(num, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Roll. No. is", num);
//         resolve("Successfully Done");
//       }, delay);
//     });
//   }
//   getRoll(1, 1000).then(() => {
   
//     getRoll(2, 2000).then(() => {
     
//       getRoll(3, 30000);
//     });
//   });

// async function printRollnumber(params) {
//   await getRoll(1,1000);
//   await getRoll(2,2000);
//   await getRoll(3,3000);
// }
// printRollnumber();

function getFood(food, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food ", food);
      resolve("Food given");
    }, delay);
  });
}
async function printfood(params) {
await getFood("food1",1000);
await getFood("food2",2000);
await getFood("food3",3000);
}
printfood();