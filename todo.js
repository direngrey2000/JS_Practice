
const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOOS_LS = 'toDos';
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText="X";
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
        // id: toDos.length + 1
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOOS_LS);
    if(loadedToDos != null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.array.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}


init();