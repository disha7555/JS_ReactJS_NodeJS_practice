//Implement a function that checks if a given string is a palindrome.
const pal=(n)=>{
    let rev="";
    let num=n.toString();
    for(let i=num.length-1; i>=0 ;i--)
        {
            rev=rev+num[i];
        }
        if(rev==num)
            {
                return true;
            }
            else{
                return false;
            }
}
let n=1221;
console.log(pal(n))