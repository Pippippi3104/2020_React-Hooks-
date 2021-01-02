import React, { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `カウント ${count}`
    }, [count])
}

export default useDocumentTitle
