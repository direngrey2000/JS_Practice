
const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
function filterFn(toDo){
    return toDo.id === 1;
}
const toDos = [];


function deleteToDo(event){
    // console.log(event.target.parentNode);
    // btn이 눌러져도, 부모가 누구인지 모르기 때문에, 어떤 버튼이 눌러졌는지 알 수가 없음. 
    // 그러한 이유로, 눌러진 버튼의 부모가 누군지 알아내야함. 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return toDo.id != parseInt(li.id);
    });
    toDos = clea nToDos;
    saveToDos();
    // console.log(cleanToDos);
}


function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText="X";
    delBtn.addEventListener("click", deleteToDo);
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
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos != null){
        const parsedToDos = JSON.parse(loadedToDos);
        // parsedToDos.array.forEach(function(toDo){
        //     paintToDo(toDo.text);
        // })

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })

        

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}


init();