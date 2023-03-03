function registered(){
    alert( "you have registered successfully");
    var name=document.form1.uname.value;
    var gender=document.form1.gender.value;
    var address=document.form1.add.value;
    var email=document.form1.mail.value;
    var dob=document.form1.dob.value;
    var profession=document.form1.profession.value;
    var phno=document.form1.phno.value;
    var teleno=document.form1.teleno.value;
    document.write("<b>Name : </b>" + name + "<br><br>");
    document.write("<b>Gender : </b>" + gender + "<br><br>");
    document.write("<b>Address : </b>" + address+ "<br><br>");
    document.write("<b>Email : </b>"+ email+"<br><br>");
    document.write("<b>DOB : </b>"+ dob +"<br><br>");
    document.write("<b>Profession : </b>"+ profession  +"<br><br>");
    document.write("<b>Phone no : </b>"+ phno +"<br><br>");
    document.write("<b>Telephone no : </b>"+ teleno +"<br><br>");   
}