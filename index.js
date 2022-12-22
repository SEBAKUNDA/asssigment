let name = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
let form = document.getElementById("form");
console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();
    myfunction();
});
function myfunction(){
    if(name.value ==""){
        document.getElementById("err1").innerHTML ="please enter your name";
    }
    else if(name.value !==""){
        document.getElementById("err1").innerHTML ="";
    }
    if(email.value ==""){
        document.getElementById("err2").innerHTML ="please enter your email";
    }
    else if(email.value !==""){
        document.getElementById("err2").innerHTML ="";
    }
    if(number.value ==""){
        document.getElementById("err3").innerHTML ="please enter your phone number";
    }
    else if(number.value!==""){
        document.getElementById("err3").innerHTML ="";
    }
    if(message.value ==""){
        document.getElementById("err4").innerHTML ="please enter your message";
    }
    else if(message.value !==""){
         document.getElementById("err4").innerHTML ="";
    }
}

