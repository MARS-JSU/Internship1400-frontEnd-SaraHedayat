//get elements
let input = document.querySelector("#Add");
let addbtn = document.querySelector("#btn");
let listItem = document.querySelector(".list")
let clearAll = document.querySelector(".clearall");
let check = document.querySelector("ul");
let items= document.querySelectorAll(".list li");
//function that can get all elements of local storage
function allStorage() {
    let values = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        values.push(localStorage.getItem(key));
    }
    return values;
}
let todos = allStorage();
showItems(todos);

addbtn.onclick = () =>{
    let data = input.value;
    if (
        data === null ||
        data === " " ||
        data.trim() === ""
    ) {
        alert("Please enter something!")
    } else {
        todos.push(data.trim());
        todos.forEach(function(item, index, array) {
            localStorage.setItem(index, item);
        })
        showItems(todos);
    }
}
//Add li in ul
function showItems(todos){
    let li = "";
    todos.forEach((element, index) => {
        li += `<li id='li${index}'>
                    <span class="todo-text" id='text${index}'> ${element} </span> 
                    <span class="delete-btn" onclick="deleteItem(${index})";>
                        <i class="fas fa-trash"></i>
                    </span>
                        <span id='edit${index}' class="edit" onclick="editItem(${index})";>
                            <i class="fas fa-pen"></i>
                        </span>
                </li>`;
    });
    listItem.innerHTML = li;
    input.value = "";
}
//delete one Item
function deleteItem(index) {
    todos.splice(index, 1)
    localStorage.clear();
    todos.forEach(function(item, index, array) {
        localStorage.setItem(index, item);
    })
    showItems(todos);
}
//delete all  Items
clearAll.onclick = () => {
    localStorage.clear();
    todos = [];
    showItems(todos);
}
//Edit Item
function editItem(index,element) {
    let liText = document.querySelector(`#text${index}`)
    let newTodo = prompt('Edit your Item', liText.innerHTML.trim());
    todos[index] = newTodo;
    todos.forEach(function(item, i, array) {
        localStorage.setItem(i, item);
    })
    showItems(todos);
}