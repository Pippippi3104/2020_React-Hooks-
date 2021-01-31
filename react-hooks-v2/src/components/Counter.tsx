import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>カウント +</button>
        </div>
    )
}

export default Counter
