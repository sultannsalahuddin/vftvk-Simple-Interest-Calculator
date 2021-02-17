function compute()
{
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rateVal").value;
    var years=document.getElementById("years").value;
    var interest=(principal*rate*years)/100;
    document.getElementById("result").innerHTML= interest;
    var output="";
    output+="<p>If you deposit <mark>"+principal+"</mark><br>";
    output+="at an interest rate of <mark>"+rate+"%."+"</mark><br>";
    output+="You will recieve an amount of <mark>"+interest+"</mark><br>";
    output+="in the year <mark>"+(parseInt(years)+2021)+"</mark>.";
    document.getElementById("results").innerHTML=output;
}    
function rateChange(val){
    document.getElementById("rateVal").innerHTML=val;
}       
function warn(){
    var x =  parseInt(document.getElementById("principal").value);
    if (x <= 0)
    {
    alert("Enter a positive number!");
    return false;
    }
}