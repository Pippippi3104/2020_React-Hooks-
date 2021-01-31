import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const incrementCount: () => void = () => {
        setCount(prevCount => prevCount + 1);
    };

    const incrementCountTen: () => void = () => {
        for(let i = 0; i < 10; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>カウント +1</button>
            <button onClick={incrementCountTen}>カウント +10</button>
        </div>
    )
}

export default Counter
