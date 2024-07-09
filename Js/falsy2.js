//Write a function to remove falsy values from an array



//When you splice elements from the array inside the loop (a.splice(i, 1)), it modifies the original array a directly.
// This can lead to unexpected behavior because the array length changes dynamically as you splice elements. 
//It's generally not recommended to modify an array while iterating over it unless you handle the indexing carefully.
const falsy=(a)=>{
    //let truthyarr=[];
    let removed=[];
    
    for(let i=0;i<=a.length;i++){
        if(!a[i]){
          //truthyarr.push(a[i]);
            //  removed = a.splice(i,1);
            // console.log(a);
            removed.push(a[i]);
            a.splice(i,1);
        }
    }
    return a ;
}
let a=[1,2,false,3,null,0,4,"",undefined,5,NaN];
console.log(falsy(a));