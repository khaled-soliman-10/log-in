let logIn = document.querySelector(".log-in");
let regester = document.querySelector(".regester");
let que = document.querySelector(".que");
let imgDiv = document.querySelector(".img");
let imgInDiv = document.querySelector(".img img");

let enter = document.querySelector(".submit");
let send = document.querySelector(".send");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let back = document.querySelector(".back");

let bravo = "imgs/bravoo.jpg";
let tryAgain = "imgs/try again.jpg";

yes.addEventListener("click",()=>{
    que.style.display = "none";
    logIn.style.display = "flex";
})
no.addEventListener("click",()=>{
    que.style.display = "none";
    regester.style.display = "flex";
})
back.addEventListener("click",()=>{
    imgDiv.style.display = "none";
    logIn.style.display = "flex";
})

send.addEventListener("click",()=>{
    if (document.querySelector(".f-name").value != "" && document.querySelector(".u-pass").value != "") {        
        window.localStorage.setItem("name",document.querySelector(".f-name").value)
        window.localStorage.setItem("pass",document.querySelector(".u-pass").value)
        regester.style.display = "none";
        logIn.style.display = "flex";
    } else {
        alert("enter the name and password")
    }
})
enter.addEventListener("click",(e)=>{
    e.preventDefault();
    if (document.querySelector(".name").value != "" && document.querySelector(".pass").value != "") {
        if (document.querySelector(".name").value == window.localStorage.getItem("name") && document.querySelector(".pass").value == window.localStorage.getItem("pass")) {
            logIn.style.display = "none";
            imgDiv.style.display = "flex";
            imgInDiv.src = bravo
        } else {
            logIn.style.display = "none";
            imgDiv.style.display = "flex";
            imgInDiv.src = tryAgain
        }
    } else {
        alert("enter the name and password")
    }
})