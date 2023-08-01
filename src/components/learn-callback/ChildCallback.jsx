import {memo} from "react";

function ChildCallback({onIncrease}) {
    console.log('re-render')
    return (
        <>
            <h1>Demo hoat dong cua Callback</h1>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(ChildCallback)