import useTodos from './functions/useTodos';

function Todos() {
    const {
        todos,
        updateTodo,
        addTodo,
        removeTodo,
        toggleComplete,
    } = useTodos(window.location.pathname);

    return <div><p>hi</p></div>
}

export default Todos;
