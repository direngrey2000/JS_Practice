
const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOOS_LS = 'toDos';


function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="X";
    const span = document.createElement("span");
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOOS_LS);
    if(toDos != null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}


init();