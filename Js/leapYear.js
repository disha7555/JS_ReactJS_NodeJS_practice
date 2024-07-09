const leapYear=(y)=>{
    if(y%400==0 || (y%100!=0 && y%4==0)){
        
        return true;
    }
    else{
        return false;
    }
}
let y=1900;
console.log(leapYear(y));
