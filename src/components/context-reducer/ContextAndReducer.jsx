import {useState, useRef} from "react";
import {useStore, infoActions} from "../../store";

function ContextAndReducer() {
    const [state, dispatch] = useStore()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const nameRef = useRef()
    const idRef = useRef(-1)

    const addToList = () => {
        const info = {
            name,
            age: +age,
            address
        }
        if (idRef.current !== -1) {
            dispatch(infoActions.updateInfo({...info, id: idRef}))
        } else {
            dispatch(infoActions.addInfoToList(info))
        }
        setName('')
        setAge('')
        setAddress('')
        idRef.current = -1
        nameRef.current.focus()
    }

    const setUpdateInfo = (index) => {
        const info = state.infoList[index]
        setName(info.name)
        setAge(info.age)
        setAddress(info.address)
        idRef.current = index
    }

    return (
        <>
            <h1>Nguyen Tien Vo</h1>

            <div>
                <label htmlFor="name">Name: </label><input ref={nameRef} id="name" value={name} type="text" onChange={e => setName(e.target.value)}/>
                <br/><label htmlFor="age">Age: </label><input id="age" value={age} type="text" onChange={e => setAge(e.target.value)}/>
                <br/><label htmlFor="address">Address: </label><input id="adress" value={address} type="text" onChange={e => setAddress(e.target.value)}/>
                <br/><button onClick={addToList}>Submit</button>
            </div>

            <div>
                {
                    state.infoList.map((info, index) => (
                        <li key={index}>
                            {info.name} - {info.age} - {info.address}
                            <button onClick={() => dispatch(infoActions.delInfoInList(index))}>&times;</button>
                            <button onClick={() => setUpdateInfo(index)}>&lt;&gt;</button>
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default ContextAndReducer