import {useState, useReducer} from "react";
import {TodoReducer} from "./TodoReducer";
import {NamesReducerV2} from "./NamesReducer";

/*
    * useReducer cung cấp thêm một sự lựa chọn sử dụng "state" trong function component.
    *** Các bước triển khai của useState và useReducer trong bài toán tăng giảm số.
    * useState:
        1. Init State: 0.
        2. Actions: Up (state + 1) / Down (state - 1).
    * useReducer:
        1. Init state: 0.
        2. Actions: Up (state + 1) / Down (state - 1).
        3. Reducer.
        4. Dispatch.
 */
// init state
const initState = 0
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
    console.log('Reducer running ==--==')
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            console.log('Invalid action')
    }
}

function LearnReducer() {
    const [countState, setCountState] = useState(0)
    const [countReducer, dispatch] = useReducer(reducer, initState)
    const [showTodo, setShowTodo] = useState(false)
    const [showTodoV2, setShowTodoV2] = useState(false)
    return (
        <>
            <h1>Learn useReducer</h1>
            <div>
                <h3>Count State</h3>
                <h4>{countState}</h4>
                <button onClick={() => setCountState(countState + 1)}>Up</button>
                <button onClick={() => setCountState(countState - 1)}>Down</button>
            </div>
            <div>
                <h3>Count Reducer</h3>
                <h4>{countReducer}</h4>
                <button onClick={() => dispatch(UP_ACTION)}>Up</button>
                <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
                <button onClick={() => dispatch('DOWN_ACTION')}>Other</button>
            </div>
            <div>
                <button onClick={() => setShowTodo(!showTodo)}>Show Todos</button>
                {showTodo && <TodoReducer />}
            </div>
            <div>
                <button onClick={() => setShowTodoV2(!showTodoV2)}>Show Names</button>
                {showTodoV2 && <NamesReducerV2 />}
            </div>
        </>
    )
}

export default LearnReducer