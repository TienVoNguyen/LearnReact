const logger = (reducer) => {
    return (oldState, action) => {
        console.group(action.type)

        console.log('action-->', action)
        console.log('oldState-->', oldState)

        const newState = reducer(oldState, action)

        console.log('newState-->', newState)

        console.groupEnd()

        return newState
    }
}

export default logger