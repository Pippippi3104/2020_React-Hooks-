import React, { useState, useEffect } from 'react'

function MouseEventEffect() {
    console.log("useEffectが呼ばれました")
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const getMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffectが呼ばれました")
        window.addEventListener("mousemove", getMousePosition)
        return () => {
            window.removeEventListener("mousemove", getMousePosition)
        }
    },[])

    return (
        <div>
            <ul>
                <li>x座標: {x}</li>
                <li>y座標: {y}</li>
            </ul>
        </div>
    )
}

export default MouseEventEffect
