document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");
    const clearBtn = document.getElementById("clearButton");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    
    const saveTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const renderTodos = () => {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            const input = document.createElement("input");
            input.type = "text";
            input.value = todo.text;
            input.addEventListener("change", () => {
                if (input.value.trim() !== "") {
                    todos[index].text = input.value;
                    saveTodos();
                }
            });
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });
            
            li.appendChild(input);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    };

    addBtn.addEventListener("click", () => {
        if (todoInput.value.trim() !== "") {
            todos.push({ text: todoInput.value });
            saveTodos();
            renderTodos();
            todoInput.value = "";
        }
    });

    clearButton.addEventListener("click", () => {
        todos = [];
        saveTodos();
        renderTodos();
    });

    renderTodos();
});
