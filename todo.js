const inputBox = document.getElementById("input-box")
const ListContainer = document.getElementById("list-container")
function addtask(){
    if(inputBox.value ==='') {
        alert("you must enter text")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML=inputBox.value
        ListContainer.appendChild(li)
    }
}