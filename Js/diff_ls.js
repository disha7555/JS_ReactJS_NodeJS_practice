//2)find the difference of largest and smallest no from array of no
//METHOD 1 : with Math object
// const diff=(arr)=>{
//     let largest=Math.max(...arr);
//     let smallest=Math.min(...arr);
//    return largest-smallest;
// }
// let a=[6,2,4];
// console.log(diff(a));




//METHOD 2




// const diff2=(arra)=>{
//    const largest= arra.reduce((h1,h2)=>{
//         if (h2>h1){
//             h1=h2
//         }
//         return h1;
       
//     });
//     const smallest= arra.reduce((s1,s2)=>{
//         if (s2>s1){
//             s2=s1
//         }
//         return s2;
       
//     });
//    return largest-smallest;
// }
// let a=[6,2,4,10,100]; 
// console.log(diff2(a))