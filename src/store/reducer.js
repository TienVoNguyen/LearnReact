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
    let newInfoList = state.infoList
    switch (action.type) {
        case SET_INFO:
            return {...state, info: action.payload}
        case ADD_INFO_TO_LIST:
            return {...state, infoList: [...state.infoList, action.payload]}
        case UPDATE_INFO:
            newInfoList[action.payload.id] = action.payload.value
            return {...state, infoList: newInfoList}
        case DEL_INFO_IN_LIST:
            newInfoList.splice(action.payload, 1)
            return {...state, infoList: newInfoList}
        default:
            throw new Error('Invalid action.')
    }
}

export { initState }

export default reducer