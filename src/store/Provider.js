import { useReducer } from 'react'
import context from './context'
import reducer, {initState} from './reducer'
import {logger} from "./index";
function Provider({children}) {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return (
        <context.Provider value={[state, dispatch]}>
            {children}
        </context.Provider>
    )
}

export default Provider