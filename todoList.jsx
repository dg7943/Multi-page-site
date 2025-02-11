import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const initialTodos = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Finish project" },
    { id: 4, text: "Call mom" },
    { id: 5, text: "Workout" },
    { id: 6, text: "Read a book" },
    { id: 7, text: "Plan weekend trip" }
];

const ToDoList = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo("");
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text} <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};

const root = createRoot(document.querySelector('main'));
root.render(<ToDoList />);
