//Implement a function that sorts an array of integers in ascending order.
const sorting=(arr)=>{
    let arra=arr.sort((a,b)=>a-b);
    return arra;
}
let arr=[5,3,1,2,4];
console.log(sorting(arr));