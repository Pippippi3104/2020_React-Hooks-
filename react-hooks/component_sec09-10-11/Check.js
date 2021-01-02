import React, { useState, useMemo } from 'react'

function Check() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 20000000) i ++
        return countOne % 2 === 0
    }, [countOne])
    return (
        <div>
            <h2>カウント1: {isEven ? "偶数" : "奇数"}</h2>
            <button onClick={incrementOne}>カウント1 - {countOne}</button>
            <button onClick={incrementTwo}>カウント2 - {countTwo}</button>
        </div>
    )
}

export default Check
