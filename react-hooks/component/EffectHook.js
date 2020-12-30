import React, { useState, useEffect } from 'react'

function EffectHook() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        document.title = `クリック数: ${count} 回`
        console.log("render")
    }, [count])

    return (
        <div>
            <p>クリック数: {count} 回</p>
            <p>名前: {name}</p>
            <input
                type="text"
                value={name}
                onChange={(e => setName(e.target.value))}
            />
            <button onClick={() => setCount(count + 1)}>カウント +</button>        
        </div>
    )
}

export default EffectHook
