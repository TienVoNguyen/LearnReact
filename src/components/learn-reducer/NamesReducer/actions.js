import {SET_NAME, ADD_TO_NAMES, REMOVE_NAME_IN_NAMES } from './constants'
export const setName = (payload) => ({
    type: SET_NAME,
    payload
})

export const addToNames = (payload) => ({
    type: ADD_TO_NAMES,
    payload
})

export const removeNameInNames = (payload) => ({
    type: REMOVE_NAME_IN_NAMES,
    payload
})