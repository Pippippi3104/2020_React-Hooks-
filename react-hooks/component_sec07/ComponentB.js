import React, { useContext } from 'react'
import { CountContext } from "../App"

function ComponentB() {
    const countContext = useContext(CountContext)

    return (
        <div>
            <button onClick={() => countContext.countDispatch({type: "increment1", value: 1})}>increment1</button>
            <button onClick={() => countContext.countDispatch({type: "decrement1", value: 1})}>decrement1</button>
            <button onClick={() => countContext.countDispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default ComponentB
