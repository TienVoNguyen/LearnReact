import {useRef, useState, useEffect, memo} from "react";

/*
    - Lưu các giá trị qua một tham chiếu bên ngoài Function component.
    - Luôn trả về OBJECT có property là "current".
 */

const LearnRef = () => {
    const [count, setCount] = useState(2309)
    const oldCount = useRef()
    const timerId = useRef()
    const divRef = useRef()
    useEffect(() => {
        const rect = divRef.current.getBoundingClientRect()
        console.log(divRef.current)
        console.log(rect)
        console.log(`Old Count: ${oldCount.current} ---> Count: ${count}`)
    })
    useEffect(() => {
        oldCount.current = count
    }, [count])
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevState => prevState - 1)
        },1000)
    }
    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <>
            <div ref={divRef}>
                <h1>{count}</h1>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </>
    )
}

export default memo(LearnRef)