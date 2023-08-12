// text box ka selector
const item = document.querySelector("#item")
// todo box ka selector
const toDoBox = document.querySelector("#to-do-box")


// item par event listner lagana hy
item.addEventListener(
    "keyup", // jaise jaise user likhega hum function chalayenge
    function(event){
        if (event.key == "Enter") { // agar user ne enter dabaya hy to jo text box me o console me daldo
            addToDo(this.value)
            this.value = ""
        }
    }
)



const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;
        listItem.addEventListener(
            "click",
            function(){
                this.classList.toggle("done"); // a class ko toggle karega toggle means add karna remove karna
            }
        )
        listItem.querySelector("i").addEventListener(
            "click",
            function() {
                listItem.remove()
            }
        )
        toDoBox.appendChild(listItem)
        }