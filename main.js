    const input = document.getElementById('input')
    const createButton = document.getElementById('crete_todo')
    const todoList = document.getElementById('todo_list')

    const createTodo = function () {
        if (input.value.trim() === '') {
            return false
        } else {
            
            const div = document.createElement('div')
            const text = document.createElement('h3')
            const edit= document.createElement('button')
            const remove = document.createElement('button')

            remove.innerText='Удалить'
            edit.innerText = 'Изменить'
                    
            div.setAttribute('class', 'block_text')
            text.setAttribute('class', 'text')
            remove.setAttribute('class', 'button')
            edit.setAttribute('class', 'btn')
            
            text.innerText = input.value.trim()
            div.append(text)
            div.append(remove)
            div.append(edit)
            todoList.append(div)
            remove.addEventListener('click',() =>{
                div.remove()
            })
            edit.addEventListener('click',() =>{
                let ed =prompt('Изменить текст')
                text.innerText = ed
            })
        }
        input.value = ''
    }
    createButton.addEventListener('click', createTodo)
    input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)

    // // createButton.onclick = () => {
    // //     if (input.value.trim() === '') return false
    // //     const div = document.createElement('div')
    // //     const text = document.createElement('h3')
    // //
    // //     div.setAttribute('class', 'block_text')
    // //     text.setAttribute('class','text')
    // //
    // //     text.innerText = input.value.trim()
    // //     div.append(text)
    // //     todoList.append(div)
    // //
    // //     input.value = ''
    // // }













