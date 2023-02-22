
function perfect() {
    var num = document.getElementById("number").value;
    var sum = 0;
    for (i = 0; i < num; i++)
        if (num % i == 0)
            sum = sum + i;
    if (sum == num) {
        document.write('the given number' + num + ' is a perfect number');
    } else {
        document.write('the given number' + num + ' is not a perfect number');
    }
}
function factorial(){
    var num = document.getElementById("fact").value;
    var f=1;
    var i=1;
    do
    {
        f=f*i;
        i++;
    }while(i<=num);
    document.write('factorial of given number is : ' + f);
}
function fibonacci(){
    var num = document.getElementById("fibo").value;
    var f;
    var f1=-1;
    var f2=1;
    document.write('the  fibonacci series is: ');
    while(num>0)
    {
        f=f1+f2;
        f1=f2;
        f2=f;
        document.write("\n"+f);
        num--;
    }
   
}