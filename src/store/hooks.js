import {useContext} from 'react'
import context from './context'

const userStore = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useContext(context)
    return [state, dispatch]
}

export {userStore}