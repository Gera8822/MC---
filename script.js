var Players_screen = document.querySelector(".Players")
var News_screen = document.querySelector(".News")
var Coaches_screen = document.querySelector(".Coaches")

var Players_link = document.querySelector(".header-button1")
var News_link = document.querySelector(".header-button2")
var Coaches_link = document.querySelector(".header-button3")

function toPlayers() {
    News_screen.style.display = "none"
    Players_screen.style.display = "block"
    Coaches_screen.style.display = "none"
    Players_link.style.backgroundColor = "#301687"
    News_link.style.backgroundColor = "#463EA3"
    Coaches_link.style.backgroundColor = "#463EA3"
}

Players_link.addEventListener("click", toPlayers)
 
function toNews() {
    News_screen.style.display = "block"
    Players_screen.style.display = "none"
    Coaches_screen.style.display = "none"
    News_link.style.backgroundColor = "#301687"
    Players_link.style.backgroundColor = "#463EA3"
    Coaches_link.style.backgroundColor = "#463EA3"
}

News_link.addEventListener("click", toNews)

function toCoaches() {
    News_screen.style.display = "none"
    Players_screen.style.display = "none"
    Coaches_screen.style.display = "block"
    Coaches_link.style.backgroundColor = "#301687"
    News_link.style.backgroundColor = "#463EA3"
    Players_link.style.backgroundColor = "#463EA3"
}

Coaches_link.addEventListener("click", toCoaches)