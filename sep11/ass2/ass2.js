/*
"Explore setTimeout and setInterval and write a program that would make use of setTimeout and call a
function after 10 sec once the app starts, and setInterval would print number 1 to 10 after interval of 5 secs and
then it should stop."
*/

setTimeout(()=>{
    console.log(10*20);
},10000);
console.log("Hi there!");

//setinerval method

const delay = 2;
const limit = 2;
let i = 1;

console.log('START!');
const limitedInterval = setInterval(() => {
  for(let i=0;i<=10;i++){
    console.log(i);
  }
  i++;
  
  if (i > limit) {
    clearInterval(limitedInterval);
    console.log('interval cleared!');
  }
}, delay * 500);

function myStopFunction() {
  clearInterval(myInterval);
}