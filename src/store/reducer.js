import { UPDATE_INFO, SET_INFO, DEL_INFO_IN_LIST, ADD_INFO_TO_LIST } from './constants'
const initState = {
    info: {
        name: '',
        age: '',
        address: ''
    },
    infoList: []
}

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_INFO:
            newState = {...state, info: action.payload}
            break
        case ADD_INFO_TO_LIST:
            newState = {...state, infoList: [...state.infoList, action.payload]}
            break
        case UPDATE_INFO:
            state.infoList[action.payload.id] = action.payload.value
            newState = {...state}
            break
        case DEL_INFO_IN_LIST:
            const newInfoList = [...state.infoList]
            newInfoList.splice(action.payload, 1)
            newState = {...state, infoList: newInfoList}
            break
        default:
            throw new Error('Invalid action.')
    }
    return newState
}

export { initState }

export default reducer