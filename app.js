const Text = document.getElementById("inputText");
const addToButton = document.getElementById("AddToDo");
let ClearToDo = document.getElementById("ClearToDo");
let ToDos = document.getElementById("toDoContainer");

addToButton.addEventListener("click", function() {
let paragraph = document.createElement("p");
paragraph.classList.add("paragrafi")
ToDos.appendChild(paragraph);
paragraph.innerHTML = Text.value;
Text.value = "";


paragraph.addEventListener("click", function() {
    paragraph.style.textDecoration = "line-through";

    })


    paragraph.addEventListener("dblclick", function() {
        ToDos.removeChild(paragraph);
        })

        ClearToDo.addEventListener("click", function() {    
        ToDos.removeChild(paragraph)

        })

})

















