const write = document.querySelector("#text");
const first = document.querySelector("#r1");
const second =document.querySelector("#g2");
const third = document.querySelector("#b3");

first.addEventListener("click",add)
function add(){
    write.style.color= "red";
}

second.addEventListener("click",add)
function add(){
    write.style.color= "green";
}

third.addEventListener("click",add)
function add(){
    write.style.color= "blue";
}
