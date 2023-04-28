let chiller = document.querySelector("#menus");
let button = document.getElementById("btn");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
console.log(button3)


button.addEventListener("click", () => {
    chiller.src = "img/hot.jpg";
    button.style.backgroundColor="brown"
    button1.style.backgroundColor = "white"
    button2.style.backgroundColor = "white"
    button3.style.backgroundColor = "white"


}
)

button1.addEventListener("click", () => {
    chiller.src = "img/chiller.jpg";
    button1.style.backgroundColor = "brown"
    button.style.backgroundColor="white"
    button2.style.backgroundColor = "white"
    button3.style.backgroundColor = "white"


}
)


button2.addEventListener("click", () => {
    chiller.src = "img/allday.jpg";
    button2.style.backgroundColor = "brown"
    button1.style.backgroundColor = "white"
    button.style.backgroundColor="white"
   button3.style.backgroundColor = "white"


}

)

button3.addEventListener("click", () => {
    chiller.src = "img/sweet.jpg";
    button3.style.backgroundColor = "brown"
    button2.style.backgroundColor = "white"
    button1.style.backgroundColor = "white"
    button.style.backgroundColor="white"

}

)
