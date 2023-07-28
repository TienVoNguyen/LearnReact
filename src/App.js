import { useState } from 'react'

const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard'
]
function App() {
    const [gift, setGift] = useState('')
    const handleRandomGift = () => {
        const giftIndex = Math.floor(Math.random() * gifts.length)
        setGift(gifts[giftIndex])
    }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{gift || 'Chua co phan thuong'}</h1>
      <button onClick={handleRandomGift}>Increase</button>
    </div>
  );
}

export default App;
