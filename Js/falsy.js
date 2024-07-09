//Write a function to remove falsy values from an array
const falsy=(a)=>{
    let truthyarr=[];
    for(let i=0;i<=a.length;i++){
        if(a[i]){
          truthyarr.push(a[i]);
        }
    }
    return truthyarr;
}
let a=[1,2,false,3,null,0,4,"",undefined,5,NaN];
console.log(falsy(a));