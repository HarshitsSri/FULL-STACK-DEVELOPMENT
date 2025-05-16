/*leap year*/
var year=prompt("Enter year to check for the leap year");
if(year%400==0||(year%4==0&&year%100!=0)){
    alert("This is a leap year");
}
else{
    alert("This year: "+year+" not a leap year");
}