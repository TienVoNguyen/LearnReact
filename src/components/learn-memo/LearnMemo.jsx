import {useMemo, useRef, useState} from "react";

/*
    - useMemo Tránh tính toán lại không cần thiết.
 */

function LearnMemo() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [ex, setEx] = useState([])
    const nameRef = useRef()
    const handleSubmit = () => {
            setEx([...ex, {
                name,
                age: +age
            }])
        setName('')
        setAge('')

        nameRef.current.focus()
    }
    // Tính toán lại không cần thiết
    // const totalAge = ex.reduce((result, e) => {
    //     console.log('tinh toan lai')
    //     return result + e.age
    // }, 0)

    const totalAge = useMemo(() => ex.reduce((result, e) => {
        console.log('tinh toan lai')
        return result + e.age
    }, 0), [ex])

    return (
        <>
            <h1>Learn useMemo</h1>
            <h3>Total age: {totalAge}</h3>
            <label htmlFor="name">Name: </label><input ref={nameRef} id="name" value={name} type="text" onChange={e => setName(e.target.value)}/>
            <br/>
            <label htmlFor="age">Age: </label><input id="age" type="text" value={age} onChange={e => setAge(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Add</button>
            <h3>Ex List</h3>
            <ul>
                {ex.map((e, index) => (<li key={index}>{e.name} - {e.age}</li>))}
            </ul>
        </>
    )
}

export default LearnMemo