const header = document.getElementById("header")
var rgb = document.getElementById("rgb")
const navbar = document.getElementById("navbar")
const newColorBtn = document.getElementById("newColorBtn")
const easyBtn = document.getElementById("easyBtn")
const hardBtn = document.getElementById("hardBtn")
var box = document.querySelectorAll(".box")
var numBoxes = 6
var color = randomColorGenerator(numBoxes)
var pickedColor = pickColor()

for(var i = 0; i < box.length; i++) {
    box[i].style.background = color[i];
    box[i].onclick = checkColor

function checkColor(){
    var checkColor = this.style.background
    if (checkColor === pickedColor){
        newColorBtn.textContent = "Retry?"
        header.style.background = checkColor
        changeColor(checkColor)
    } else {
        this.style.background = "#232323"
    }
    }
}

function newColor(){
    color = randomColorGenerator(numBoxes)
    pickedColor = pickColor()
    rgb.textContent = pickedColor
    for (var i = 0; i < box.length; i++){
        box[i].style.background = color[i]
    }
    header.style.background = "#4682b4"
    newColorBtn.textContent = "New Colors"
}

function easyGame(){
    hardBtn.classList.remove("default")
    easyBtn.classList.add("default")
    numBoxes = 3
    color = randomColorGenerator(numBoxes)
    pickedColor = pickColor()
    rgb.textContent = pickedColor
    for (var i = 0; i < box.length; i++){
        if (color[i]) {
            box[i].style.background = color[i]
        } else {
            box[i].style.display = "none"
        }
    }
}

function hardGame(){
    easyBtn.classList.remove("default")
    hardBtn.classList.add("default")
    numBoxes = 6
    color = randomColorGenerator(numBoxes)
    pickedColor = pickColor()
    rgb.textContent = pickedColor
    for (var i = 0; i < box.length; i++){
        box[i].style.background = color[i]
        box[i].style.display = "flex"
        }
}

function changeColor(color){
    for (var i = 0; i < box.length; i++){
        box[i].style.background = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length)
    return color[random]
}

function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b +")"
}

function randomColorGenerator(num){
    var arr = []
    for (var i = 0; i < num; i++) {
      arr.push(randomColor())
    }
    return arr;
  }

rgb.textContent = pickedColor