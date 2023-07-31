import { useState, memo } from "react"
function TodoListState() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todoList')) || []
    })

    const handleAdd = () => {
        setTodos(pre => {
            const todoTemp = [...pre, todo]
            localStorage.setItem('todoList', JSON.stringify(todoTemp))
            return todoTemp
        })
        setTodo('')
    }

    return (
        <>
            <h1>Todo List</h1>
            <div style={{padding: 32}}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
                <ul>
                    {
                        todos.map((todo, index) => (
                            <li key={index} >{todo}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default memo(TodoListState)