const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";


let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // ARRAY 형태로 로컬 스토리지에 입력값을 저장(각각의 입력값을 개별 스트링으로)
}

function deleteToDo(event){
    const li = event.target.parentElement; // 클릭된 버튼 식별
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "🍴";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; // copy todoInput.value into newTodo
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


todoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // 스트링을 배열로 변환 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 

