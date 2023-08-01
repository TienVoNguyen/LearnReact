import {useReducer, useRef} from "react";
import reducer, {initState} from "./reducer";
import {setName, addToNames, removeNameInNames} from './actions'
import logger from "./logger";
export function NamesReducerV2() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const inputRef = useRef()
    const {name, names} = state

    const hanldeAddToNames = () => {
        dispatch(addToNames(name))
        dispatch(setName(''))
        inputRef.current.focus()
    }

    return (
        <>
            <h1>Names Reducer</h1>
            <input ref={inputRef} type="text" value={name} onChange={e => dispatch(setName(e.target.value))} />
            <button onClick={hanldeAddToNames}>Add to Names</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name} <button onClick={() => dispatch(removeNameInNames(index))}>&times;</button></li>
                ))}
            </ul>
        </>
    )
}