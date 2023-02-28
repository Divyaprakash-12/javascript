
        function validateform(){
            var username=document.login.uname.value;
            var password=document.login.pwd.value;
            var confrm_pwd=document.login.cpwd.value;
            var letters = /^[A-Za-z]+$/;
            var password= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
            if (username==null||username==""){
                alert("enter a username");
            }
           else if(!letters.test(username)){
            alert("username only required albhabets")
           }
           else if(password==null||password==""){
            alert("enter a password")
           }
           else if(!password.test(pwd)){
            alert("Upper case, Lower case, Special character and Numeric letter are required in Password filed")
           }
           else if(confrm_pwd==null||confrm_pwd==""){
            alert("reenter a password")
           }
           else if(!password.test(cpwd)){
            alert("password should not match")
           }
        }