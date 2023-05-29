// 初始變數
const list = document.querySelector('#my-todo')
const addBtn = document.querySelector('#add-btn')
const input = document.querySelector('#new-todo')
const done= document.querySelector('#task-done')
const listArea = document.querySelector('#list-area')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem (text) {
  if (text.length === 0) return
  const newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
  input.value = ""
}

function addDoneItem(text) {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  done.appendChild(newItem)
}

//新增Todo
addBtn.addEventListener('click', function() {
  const inputValue = input.value.trim()
  addItem(inputValue)
})
//按Enter新增Todo
input.addEventListener('keyup', event => {
  const inputValue = input.value.trim()
  if (event.key === "Enter") {
    addItem(inputValue)
  }
})

//刪除Todo
listArea.addEventListener('click', event => {
  const target = event.target
  const parenElement = target.parentElement
  
  if (target.classList.contains("delete")) {
    parenElement.remove()
  } else if (target.tagName === "LABEL") {
    if (!target.classList.contains("checked")) {
      addDoneItem(target.textContent)
      parenElement.remove()
    }
  }
})