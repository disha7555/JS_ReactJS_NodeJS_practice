// Implement a function that checks if a given number is prime.
const prime=(n)=>{
    if(n==1 || n==0){
        return false;
    }
    else{
        for(let i=2;i<=n-1;i++)
            {
                if(n%i==0){
                    return false;
                }
                
                   
                
            }
            return true;
    }
}
let n=17;
console.log(prime(n));