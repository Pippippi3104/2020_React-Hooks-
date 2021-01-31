import React, { useState } from 'react'

type ItemState = {
    id: number, 
    value: number
};

const Item: React.FC = () => {
    const [items, setItems] = useState<ItemState[]>([]);
    
    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor( Math.random() * 11)}])
    }

    return (
        <div>
            <button onClick={addItem}>追加</button>
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
};

export default Item;
