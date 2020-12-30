import React, { useState } from 'react'

function ItemHook() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {id: setItems.length, value: Math.floor( Math.random()*11 )}])
    }

    return (
        <div>
            <button onClick={addItem} >追加</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            {item.value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemHook
