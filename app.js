let Teksti = document.getElementById("inputText");
let Shto = document.getElementById("AddToDo");
let Fshije = document.getElementById("ClearToDo");
let Kontinieri = document.getElementById("toDoContainer");

Shto.addEventListener("click", function () {
  let paragraf = document.createElement("p");
  paragraf.classList.add("paragrafi");
  Kontinieri.appendChild(paragraf);
  paragraf.innerHTML = Teksti.value;
  Teksti.value = "";

  paragraf.addEventListener("click", function () {
    paragraf.style.textDecoration = "line-through";
  });

  paragraf.addEventListener("dblclick", function () {
    Kontinieri.removeChild(paragraf);
  });
  Fshije.addEventListener("click", function () {
    Kontinieri.removeChild(paragraf);
  });
});
