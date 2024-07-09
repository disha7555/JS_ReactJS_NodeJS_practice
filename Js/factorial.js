//Create a function that returns the factorial of a given number.
const fact=(n)=>{
    //let r;
    if(n==0||n==1){
        return 1;
    }
   else{
         return n*fact(n-1);
   } 

}

let n=3;
console.log(fact(n));