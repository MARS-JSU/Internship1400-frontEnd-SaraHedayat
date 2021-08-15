//get elements
let input = document.querySelector("#Add");
let addbtn = document.querySelector("#btn");
let listItem = document.querySelector(".list")

showItems();

addbtn.onclick = () =>{
    let data= input.value;
    let getLocalStorage = localStorage.getItem("items");
    if(getLocalStorage == null){
        list = [ ];
    }else{
        list = JSON.parse(getLocalStorage);
    }
    list.push(data);
    localStorage.setItem("items" , JSON.stringify(list));
    showItems();
}
//Add li in ul
function showItems(){
    let getLocalStorage = localStorage.getItem("items");
    if(getLocalStorage == null){
        list = [ ];
    }else{
        list = JSON.parse(getLocalStorage);
    }
    let li = " ";
    list.forEach((element , index) =>{
        li += ` <li> ${element} <span class="delete-btn" onclick="deleteItem(${index})";><i class="fas fa-trash"></i></span><span class="edit"><i class="fas fa-pen"></i></span></li>`;
    });
    listItem.innerHTML = li;
    input.value = "";
    input.style.fontFamily="Roboto";
    input.style.fontSize="18px";
}
//Delete item
function deleteItem(index){
    let getLocalStorage = localStorage.getItem("items");
    list = JSON.parse(getLocalStorage);
    list.splice(index , 1);  //remove li
    //update local storage
    localStorage.setItem("items" , JSON.stringify(list));
    showItems();
}
