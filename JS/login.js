// var mark;

var submit = document.getElementById("sbmit");



submit.onclick = function() {validate(myfunc)};

function validate(callback)
{
    var error = document.getElementById("error");
    var username = document.getElementById("Username");
    var pwd = document.getElementById("inputPassword4");
    
     // Validation for username
     if(username.value == "admin" && pwd.value == "12345")
     {
         value = true;
         console.log(value);
         callback();
        //  return true;
    }
    else
    {
        value = false;
        console.log(value);

        error.innerHTML = "Invalid LogIn Credentials";
        error.style.color = "red";
        error.style.fontSize = "smaller";
        error.style.fontFamily = "Times New Roman";
        //    return false;
    }

    // callback(mark);
 
}

function myfunc()
{  
    

       window.location.href = "../home.html";
 
}


