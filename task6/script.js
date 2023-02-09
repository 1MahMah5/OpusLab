function addToDoFormPopUp() {
    document.getElementById('formContainer').style.display = 'block' 
}

function closeFormPopUp() {
    document.getElementsByTagName('form')[0].reset()
    document.getElementById('formContainer').style.display = 'none'
}

function createToDo(title, desc, dateCreation, ddl) {
    return { title, desc, dateCreation, ddl }
}

function convertToDo(ToDo) {
    title = ToDo.title
    desc = ToDo.desc
    dateCreation = ToDo.dateCreation
    ddl = ToDo.ddl

    h3 = document.createElement('h3')
    p = document.createElement('p')
    p1 = document.createElement('p')
    p2 = document.createElement('p')
    container = document.createElement('div')

    titleElement = document.createTextNode(title)
    descElement = document.createTextNode(desc)
    dCElement = document.createTextNode(dateCreation)
    ddlElement = document.createTextNode(ddl)

    h3.append(titleElement)
    p.append(descElement)
    p1.append(dCElement)
    p2.append(ddlElement)

    container.className = 'todo'
    container.append(h3)
    container.append(p)
    container.append(p1)
    container.append(p2)

    return container
}

function addToDo() {
    title = document.getElementById('title').value 
    desc = document.getElementById('desc').value 
    ddl = document.getElementById('ddl').value
    date = new Date()
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()
    d = day.toString() + '/' + month.toString() + '/' + year.toString()   

    todoObject = createToDo(title,desc,d,ddl)
    td = convertToDo(todoObject)
    
    List.append(td)
     
    saveToDoLocalStorage(todoObject)

    closeFormPopUp()
}

function saveToDoLocalStorage(todo) {
    todoList.push(todo)
    jsontodoList = JSON.stringify(todoList)
    localStorage.setItem('todoList',jsontodoList)
}

todoList = localStorage.getItem('todoList')
List = document.getElementById('ToDoList')

if(todoList == null) {
    todoList = []
    jsonTab = JSON.stringify(todoList)
    localStorage.setItem('todoList',jsonTab)
}
else{
    todoList = JSON.parse(todoList)
    
    todoList.forEach(function (todo) {
        todoHTML = convertToDo(todo)
        List.append(todoHTML)
    });
}