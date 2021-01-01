import React from 'react'

function Title() {
    console.log("Title component")

    return (
        <div>
            <h1> useCallback hook による最適化</h1>
        </div>
    )
}

export default React.memo(Title)
