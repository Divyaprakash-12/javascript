function validateform1() {
    var fn = document.login1.fname.value;
    var ln = document.login1.lname.value;
    var dob = document.login1.dob.value;
    var gen = document.login1.gender.value;
    var d1 = new Date(dob);
    var d2 = new Date;
    var d3 = d2 - d1;
    var age = (d3 / 1000 * 24 * 60 * 60);
    if (fn == "") {
        alert("enter your first name");
    }
    else if (ln == "") {
        alert("enter your last name");
    }
    else if (dob == "") {
        alert("enter your date of birth")
    }
    else if (age > 18) {
        alert(fn + ln + "able to vote this year");
    }
    else if (age < 18) {
        alert(fn + ln + "Wait to reach 18 years")
    }
    alert("registered sucessfully");
    document.write("<h2><center>Display Details</center></h2>" + "<br><br>")
    document.write("Fullname : " + fn + ln + "<br>");
    document.write("gender : " + gen + "<br>");
    document.write("date of birth : " + dob + "<br>");

}

function validateform() {
    var username = document.login.uname.value;
    var password = document.login.pwd.value;
    var confrm_pwd = document.login.cpwd.value;
    var letters = /^[A-Za-z]+$/;
    var passtest = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    if (username == null || username == "") {
        alert("enter a username");
    }
    else if (!letters.test(username)) {
        alert("username only required albhabets");
    }
    else if (password == null || password == "") {
        alert("enter a password");
    }
    else if (!passtest.test(password)) {
        alert("Upper case, Lower case, Special character and Numeric letter are required in Password filed");
    }
    else if (confrm_pwd == null || confrm_pwd == "") {
        alert("enter  confirm password");
    }
    else if (!passtest.test(confrm_pwd)) {
        alert("password should not match");
    }
    else {
        alert("thank you! login successfully");
        window.location = "http://127.0.0.1:5500/task2(2)(b).html";
    }
}
