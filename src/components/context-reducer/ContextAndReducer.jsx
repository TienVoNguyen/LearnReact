import {useContext} from "react";
import {contextApp} from "../../store";
function ContextAndReducer() {
    const [state, dispatch] = useContext(contextApp)
    console.log(state);
    return (
        <>
            <h1>Nguyen Tien Vo</h1>
        </>
    )
}

export default ContextAndReducer