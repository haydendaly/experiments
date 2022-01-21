import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const BACKEND_URL = "https://localhost:5000/"

type Todo = {
    id?: string;
    isComplete?: boolean;
    text?: string;
    priority?: number;
};

const useTodos = (id: string) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(BACKEND_URL + "list/" + id)
            .then(response => setTodos(response.data));
    }, []);

    useEffect(() => {
        if (todos !== []) {
            axios.post(BACKEND_URL + "list/" + id, JSON.stringify(todos))
            .then(response => console.log(response));
        }
    }, [todos]);

    function updateTodo(todoId: string, newTodo: Todo) {
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, ...newTodo }
            }
            return todo;
        });
        setTodos(newTodos);
    }

    function addTodo(newTodo: Todo) {
        const newTodos = [...todos, { id: uuidv4(), ...newTodo }];
        setTodos(newTodos);
    }

    function removeTodo(todoId: string) {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    }

    function toggleComplete(todoId: string) {
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(newTodos);
    }

    return {
        todos,
        updateTodo,
        addTodo,
        removeTodo,
        toggleComplete,
    }
}

export default useTodos;
