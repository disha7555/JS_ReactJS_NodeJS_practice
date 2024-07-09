//4)palindrom no 

//Method:1
let arr=[];
const pal=(n1)=>{
    let n2=Math.abs(n1).toString();
    for(let i=n2.length-1;i>=0;i--){
        arr.push(n2[i]);
    }
    let a=arr.join("");
    console.log(a);
    if(a==n1){
        console.log("yes");
    return true;
    }
    else{
        console.log("no");
        return false;
    }
}
let n=1222;
console.log(pal(n));


//Method:2
// const pal = (n) => {
//     // Convert number to string to handle negative numbers and to reverse it
//     let n1 = Math.abs(n).toString();
//     let reversed = '';

//     // Reverse the string representation of the number
//     for (let i = n1.length - 1; i >= 0; i--) {
//         reversed += n1[i];
//     }

//     console.log(reversed);

//     // Compare reversed string with original string representation of the number
//     if (reversed === n1) {
//         console.log("yes");
//         return true;
//     } else {
//         console.log("no");
//         return false;
//     }
// }

// let n = 1221;
// console.log(pal(n)); // Output: yes (true)

// n = -12321;
// console.log(pal(n)); // Output: yes (true)

// n = 1234;
// console.log(pal(n)); // Output: no (false)
