
const logger = (reducer) => {
    return (preState, action) => {
        console.group(action.type)
        console.log('PreState: ', preState)
        console.log('Action: ', action)

        const newState = reducer(preState, action)

        console.log('NewState: ', newState)
        console.groupEnd()
        return newState
    }
}

export default logger