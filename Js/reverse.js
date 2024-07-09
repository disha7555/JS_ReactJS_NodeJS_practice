//3)reverse string without reverse functions
let arr=[];
const rev=(str)=>{
    
    let i;
    for(i=str.length-1;i>=0;i--){
       
        arr.push(str[i]);
        
    }
    console.log(arr);
    let r=arr.join("");
    return r;
}
str="abcd";
console.log(rev(str));