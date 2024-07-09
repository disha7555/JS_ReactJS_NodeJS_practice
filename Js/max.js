//Write a function to find the maximum number in an array.
const max=(a)=>{
    let maximum=a[0];
    for(i=1;i<=a.length;i++)
        {
            if(a[i]>maximum)
                {
                    maximum=a[i];
                }
        }
        return maximum;
}
let a=[14,2,10,100,-101];
console.log(max(a));