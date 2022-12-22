const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
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
const activePage = window.location.pathname;
const navlink = document.querySelectorAll('nav a').
forEach link ==> {
    if link.href.includes('$'{activePage}){
       link.classList.add('active'); 
    }
}