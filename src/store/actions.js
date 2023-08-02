import { ADD_INFO_TO_LIST, SET_INFO, DEL_INFO_IN_LIST, UPDATE_INFO } from './constants'

const addInfoToList = (payload) => ({
    type: ADD_INFO_TO_LIST,
    payload
})

const setInfo = (payload) => ({
    type: SET_INFO,
    payload
})

const delInfoInList = (payload) => ({
    type: DEL_INFO_IN_LIST,
    payload
})

const updateInfo = (payload) => ({
    type: UPDATE_INFO,
    payload
})

export { addInfoToList, updateInfo, setInfo, delInfoInList }