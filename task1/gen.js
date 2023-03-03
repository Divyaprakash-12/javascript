function gender(){
    var gender=document.getElementById("g").value;
    if(gender=='m' || gender=='M'){
    alert("The person is a male");}
    else if(gender=='f' || gender=='F'){
    document.write("the person is a female");}
    else{
    document.write("invalid input");}
}
function swi(){
    var cls=document.getElementById("g").value;
    switch(cls){
        case "m":
            document.write("the person is a male");
            break;
        case "f":
            document.write("the person is a female");
            break;
        case "M":
            document.write("the person is a male");
            break;
        case "F":
        document.write("the person is a female");
            break;

        default:
            document.write("invalid input");
    }
}
