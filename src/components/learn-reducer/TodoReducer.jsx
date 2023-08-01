import {useState, useReducer, useRef} from "react";

// 1. Init state
const initState = []
// 2. Actions
const ADD_ACTION =  {
    name: 'add',
    value: ''
}
const REMOVE_ACTION = {
    name: 'remove',
    value: ''
}
// 3. Reducer
const reducer = (state, action) => {
    console.log(action, state)
    switch (action.name) {
        case ADD_ACTION.name:
            return [...state, action.value]
        case REMOVE_ACTION.name:
            return state.filter(todo => todo !== action.value)
        default:
            throw new Error('Invalid action')
    }
}

export function TodoReducer() {
    const [todo, setTodo] = useState('')
    const [todos, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef()
    const handleAddTodo = () => {
        ADD_ACTION.value = todo
        dispatch(ADD_ACTION)
        setTodo('')
        inputRef.current.focus()
    }
    const handleRemoveTodo = (todo) => {
        REMOVE_ACTION.value = todo
        dispatch(REMOVE_ACTION)
    }
    return (
        <>
            <h1>Todo</h1>
            <input ref={inputRef} value={todo} type="text" onChange={e => setTodo(e.target.value)} /> <button onClick={handleAddTodo}>Add</button>
            <br/>
            <ul>
                { todos.map((todo, index) => (
                    <li key={index}>{todo} <button onClick={() => handleRemoveTodo(todo)}>&times;</button></li>
                ))}
            </ul>
        </>
    )
}