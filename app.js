const circle = document.getElementById("circle")
const square = document.getElementById("square")
const rectangle = document.getElementById("rectangle")

const button = document.getElementById("button")

var numberintheshape = 1
var oldnumber = 0

button.onclick=()=>{
    let n = document.getElementById("number").value
    const box = document.getElementById("box")

    n = Number(oldnumber) +Number(n)
    for(let j = numberintheshape; j<=n; j++)
    {var shape = document.createElement("div")
    shape.innerHTML += numberintheshape
if (circle.checked)
shape.classList.add("circle")

else if (square.checked)
shape.classList.add("square")

else if (rectangle.checked)
shape.classList.add("rectangle")


box.appendChild(shape);
numberintheshape++
oldnumber = box.lastElementChild.innerHTML}
}
