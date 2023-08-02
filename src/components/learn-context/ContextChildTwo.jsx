import {useContext} from "react";
import {ThemeContext} from "./Context";

export function ContextChildTwo() {
    const theme = useContext(ThemeContext)

    return (
        <>
            <p className={theme}>
                Đội tuyển nữ Việt Nam đã khép lại kỳ World Cup 2023 bằng trận thua 0-7 trước Hà Lan tại sân Forsyth Barr (Dunedin, New Zealand). Như vậy, đội bóng của HLV Mai Đức Chung đã bị loại mà không ghi nổi bàn thắng nào (thủng lưới 12 bàn).
            </p>
        </>
    )
}