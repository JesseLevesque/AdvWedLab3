let todoServiceUrl = "https://localhost:7282/api/todo";

let todoEl = document.getElementById("items");



let getTodos = async function() {

    let todoData = await (await fetch(todoServiceUrl)).json();


    todoEl.innerHTML = "<ol>";
    for (let i = 0; i < todoData.length; i++) {
        todoEl.innerHTML += `<li class="complete${todoData[i].isComplete}">${todoData[i].task}</li>`;
    }

    todoEl.innerHTML += "</ol>";

}


getTodos();