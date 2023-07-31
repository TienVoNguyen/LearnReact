import {useLayoutEffect, useState, useEffect, memo} from "react";

/*
    Thứ tự thực hiện
    *** useEffect
    * 1. Cập nhật lại state.
    * 2. Cập nhật lại DOM (mutated).
    * 3. Render lại UI.
    * 4. Gọi cleanup nếu deps thay đổi.
    * 5. Gọi useEffect callback.
    *** useLayoutEffect
    * 1. Cập nhật lại state.
    * 2. Cập nhật lại DOM (mutated).
    * 3. Gọi cleanup nếu deps thay đổi (sync).
    * 4. Gọi useEffect callback (sync).
    * 5. Render lại UI.
 */
function LearnLayoutEffect() {
    const [countEffect, setCountEffect] = useState(0)
    const [countLayoutEffect, setCountLayoutEffect] = useState(0)
    useEffect(() => {
        if (countEffect > 3) setCountEffect(0)
    }, [countEffect])
    useLayoutEffect(() => {
        if (countLayoutEffect > 3) setCountLayoutEffect(0)
    }, [countLayoutEffect])

    return (
        <>
            <div>
                <h3>Count Effect</h3>
                <p>{countEffect}</p>
                <button onClick={() => setCountEffect(countEffect + 1)}>CountEffect</button>
            </div>
            <div>
                <h3>Count Layout Effect</h3>
                <p>{countLayoutEffect}</p>
                <button onClick={() => setCountLayoutEffect(countLayoutEffect + 1)}>CountLayoutEffect</button>
            </div>
        </>
    )
}

export default memo(LearnLayoutEffect)