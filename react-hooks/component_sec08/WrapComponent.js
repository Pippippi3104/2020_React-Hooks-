import React, { useCallback, useState } from 'react'
import Count from "./Count"
import Button from "./Button"
import Title from "./Title"

const WrapComponent = () => {
    const [age, setAge] = useState(30)
    const [score, setScore] = useState(100)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementScore = useCallback(() => {
        setScore(score + 100)
    },[score])

    return (
        <div>
            <Title />
            <Count text="年齢" count={age} />
            <Count text="信用スコア" count={score} />
            <Button handleClick={incrementAge}>年齢 +</Button>
            <Button handleClick={incrementScore}>信用スコア +</Button>
        </div>
    )
}

export default WrapComponent
