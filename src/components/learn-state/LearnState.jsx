import { useState, memo } from "react";
/*
    - useState Trạng thái của dữ liệu.
    - Component được re-render sau khi `setState`.
    - Set state với callback nhận lại giá trị của state cũ.
    - Initial state với callback.
    - Set state là thay thế state bằng giá trị mới.
 */

const orders = [100, 200, 300, 500]

const gifts = [
    'Nguyễn Thị Hà',
    'Nguyễn Minh Thư',
    'Đặng Kim Cúc',
    'Nguyễn Hoàng Cát Minh',
    'Nguyễn Thị Thuỳ',
    'Nguyễn Thị Thuý',
    'Nguyễn Thị Quyên'
]
function LearnState() {
    const [count, setCount] = useState(orders.reduce((previousValue, currentValue) => previousValue + currentValue))
    const [gift, setGift] = useState('')
    const [info, setInfo] = useState({
        name: 'Nguyễn Thị Hà',
        age: 23,
        address: 'Phú Thọ'
    })

    const handleIncrease = () => {

        // Callback trong setState
        setCount(prevState => prevState + 1)
    }

    const handleRandomGift = () => {
        const giftIndex = Math.floor(Math.random() * gifts.length)
        setGift(gifts[giftIndex])
    }

    const handleUpdate = () => {
        setInfo(pre => {
            // logic
            return {
                ...pre,
                bio: 'Nghe nhạc, đọc sách, đu idol...'
            }
        })
    }

    return (
        <>
            <h1>Learn State</h1>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={handleIncrease}>Increase!</button>
            </div>
            <div>
                <h1>{gift || 'Chưa có phần thưởng'}</h1>
                <button onClick={handleRandomGift}>Random gifts</button>
            </div>
            <div>
                <h1>{JSON.stringify(info)}</h1>
                <button onClick={handleUpdate}>Update info</button>
            </div>
        </>
    )
}

export default memo(LearnState)