function rejistered(){
   
    alert( "you have rejistered successfully");
    var name=document.form1.uname.values;
    var email=document.form1.mail.values;
    var gender=document.form1.gender.values;
    var address=document.form1.add.values;
    var DOB=document.form1.DOB.values;
    var profession=document.form1.profession.values;
    var phno=document.form1.phno.values;
    var teleno=document.form1.teleno.values;
    document.write( name +"<br>");
    document.write("email : "+ email +"<br>");
    document.write("DOB : "+ DOB +"<br>");
    document.write("profession : "+ profession  +"<br>");
    document.write("phone no : "+ phno +"<br>");
    document.write("telephone no : "+ teleno +"<br>");
    
}