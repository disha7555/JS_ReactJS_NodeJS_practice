//Write a function to reverse a string.
const rev=(s)=>{
    let revstr="";
    for(let i=s.length-1;i>=0;i--)
        {
            revstr=revstr+s[i];
            //console.log(revstr);
        }
        return revstr;
}
const s="abcd";
console.log(rev(s));