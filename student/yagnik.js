function basic(){
    console.log("hello world!!");
}
basic();

function add(a,b){
    sum=a+b;
    console.log("A+B:",sum);
}
add(5,10);

function sub(a,b){
   return a-b;
}
const sum1=sub(10,10);
console.log(sum1);

const display=()=>{
    console.log("hello");    
}
display();

(function rw(){
    console.log("IIFE");  
})();

function mu(n){
    if (n == 0) return 1;
    return n * mu(n-1);
}
console.log(mu(5));
