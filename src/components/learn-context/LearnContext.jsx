import {useState} from "react";
import {ContextChildOne} from "./ContextChildOne";
import {ThemeContext} from "./Context";
/*
    * Đơn giản hoá truyền dữ liệu từ component cha xuống component con mà không phải dùng props.
    *** Các bước:
    * 1. Create context.
    * 2. Provider.
    * 3. Consumer.
 */
export function LearnContext() {
    const [theme, setTheme] = useState('light')

    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={theme}>
        <>
            <button onClick={handleChangeTheme}>Change theme</button>
            <ContextChildOne />
        </>
        </ThemeContext.Provider>
    )
}