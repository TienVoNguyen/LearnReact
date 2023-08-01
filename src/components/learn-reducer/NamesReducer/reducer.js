import {SET_NAME, ADD_TO_NAMES, REMOVE_NAME_IN_NAMES } from './constants'

export const initState = {
    name: '',
    names: []
}

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_NAME:
            newState = {...state, name: action.payload}
            break
        case ADD_TO_NAMES:
            newState = {...state, names: [...state.names, action.payload]}
            break
        case REMOVE_NAME_IN_NAMES:
            const newNames = [...state.names]
            newNames.splice(action.payload, 1)
            newState = {...state, names: newNames}
            break
        default:
            throw new Error('Invalid action.')
    }
    return newState
}

export default reducer