let violeta = document.getElementById('AddToDo');
let fidan = document.getElementById('ClearToDo');
let asja = document.getElementById('inputText');
let skender = document.getElementById('toDoContainer');

violeta.addEventListener('click', function(){
let paragraf = document.createElement('p');
skender.appendChild(paragraf);
paragraf.innerHTML = asja.value;
asja.value =""
paragraf.classList.add('paragrafi');

paragraf.addEventListener('click', function() {
    paragraf.style.textDecoration = 'line-through';
})
paragraf.addEventListener('dblclick', function() {
skender.removeChild(paragraf);
})

fidan.addEventListener('click', function() {
    skender.removeChild(paragraf); 
})
})


