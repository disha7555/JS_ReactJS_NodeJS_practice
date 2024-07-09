// Create a function that takes an array of numbers and returns the sum of all positive numbers.
const sum=(arr)=>{
    let s=0;
    for(let i=0;i<=arr.length-1;i++)
        {
            if(arr[i]>0){
                 s=s+arr[i];
            }
        }
        return s;
}
let arr=[1,1,1,-11];
console.log(sum(arr));