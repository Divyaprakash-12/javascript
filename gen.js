function gender(){
    var gen=document.getElementById("g").value;
    if(gen=='m' || gen=='M')
    document.write("The person is a male");
    else if(gen=='f' || gen=='F')
    document.write("the person is a female");
    else
    document.write("invalid input");
}