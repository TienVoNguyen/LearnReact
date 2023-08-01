import {useState, useCallback} from "react";
import ChildCallback from "./ChildCallback";

/*
    1. memo() -> Higher Order Component (Component bậc cao - HOC): render lại component khi props thay đổi nếu k thì thôi.
    2. useCallback() : tránh tạo ra hàm mới không cần thiết.
    => Dùng useCallback thì phải có memo
 */
const LearnCallback = () => {
    const [count, setCount] = useState(0)
    // Luon Re-render
    // const handleIncrease = () => {
    //     setCount(prevState => prevState + 1)
    // }

    const handleIncrease = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <ChildCallback onIncrease={handleIncrease} />
        </>
    )
}

export default LearnCallback