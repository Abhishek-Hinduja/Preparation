var todos = []
function init(){
    let container = document.createElement("div")
    document.body.appendChild(container)
    container.setAttribute("id", "main")
    let leftdiv = document.createElement("div")
    leftdiv.setAttribute("id","left")
    var heading = document.createElement("h1")
    heading.innerHTML = "All your task will appear here"
    leftdiv.appendChild(heading)
    let rightdiv = document.createElement("div")
    rightdiv.setAttribute("id", "right")
    let inputtodo = document.createElement("textarea")
    inputtodo.setAttribute("placeholder", "Enter your Task here")
    inputtodo.setAttribute("id", "input")
    rightdiv.appendChild(inputtodo)
    container.appendChild(leftdiv)
    container.appendChild(rightdiv)

    inputtodo.addEventListener("keyup", eventhandler)
}

function eventhandler(event){
    let leftdiv = document.getElementById("left")
    let input = document.getElementById("input")
    let value = input.value

    if (event.code == "Enter"){
        let container = document.createElement("div")
        let heading = document.createElement("h1")
        let deletebutton = document.createElement("button")
        let readbutton = document.createElement("button")

        container.setAttribute("class", "contain")
        heading.setAttribute("id", "heading")
        deletebutton.setAttribute("id", "delete")
        readbutton.setAttribute("id", "read")       
        deletebutton.innerHTML = "delete"
        readbutton.innerHTML = "read"
        heading.innerHTML = value
        var uniqueid = "Todo-" + Date.now()
        
        container.appendChild(heading)
        container.appendChild(readbutton)
        container.appendChild(deletebutton)
        leftdiv.appendChild(container)
        todos.push({
            id:uniqueid,
            text:value
        })
    
        localStorage.setItem('todo', JSON.stringify(todos))
        deletebutton.addEventListener("click",function(){
            container.remove()
            var index = todos.findIndex((Gourav)=>Gourav.id===uniqueid)
            if (index!==-1){
                todos.splice(index,1)
                localStorage.setItem("todo",JSON.stringify(todos))
            }
        })

        readbutton.addEventListener("click",function(){
            var newText = prompt("Enter the updated text")
            heading.innerHTML = newText
            var index = todos.findIndex((Gourav)=>Gourav.id===uniqueid)
            if (index!==-1){
                todos[index].text = newText
                localStorage.setItem("todo",JSON.stringify(todos))
            }
        })
      
        input.value = ""
        
    }
}

init()

var storedtodos = localStorage.getItem('todo')

if(storedtodos != null){
    todos = JSON.parse(storedtodos)

}

todos.forEach(function(value){
    let leftdiv = document.getElementById("left")
    let container = document.createElement("div")
    let heading = document.createElement("h1")
    let deletebutton = document.createElement("button")
    let readbutton = document.createElement("button")

    container.setAttribute("class", "contain")
    heading.setAttribute("id", "heading")
    deletebutton.setAttribute("id", "delete")
    readbutton.setAttribute("id", "read")

    deletebutton.innerHTML = "delete"
    readbutton.innerHTML = "read"
    heading.innerHTML = value.text
    
    container.appendChild(heading)
    container.appendChild(readbutton)
    container.appendChild(deletebutton)
    leftdiv.appendChild(container)

    deletebutton.addEventListener("click",function(){
        container.remove()
        var index = todos.findIndex((Gourav)=>Gourav.id===uniqueid)
        if (index!==-1){
            todos.splice(index,1)
            localStorage.setItem("todo",JSON.stringify(todos))
        }
    })

    readbutton.addEventListener("click",function(){
        var newText = prompt("Enter the updated text")
        heading.innerHTML = newText
        var index = todos.findIndex((Gourav)=>Gourav.id===uniqueid)
        if (index!==-1){
            todos[index].text = newText
            localStorage.setItem("todo",JSON.stringify(todos))
        }
    })
})
