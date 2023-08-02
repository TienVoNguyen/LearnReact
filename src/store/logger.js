import reducer from "./reducer";
const logger = (oldState, action) => {
    console.group(action.type)

    const newState = reducer(oldState, action)

    console.log('action-->', action)
    console.log('oldState-->', oldState)
    console.log('newState-->', newState)

    console.groupEnd()

    return newState
}

export default logger