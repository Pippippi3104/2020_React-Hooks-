import React, { useState } from 'react'

function FormHook() {
    const [name, setName] = useState({ firstName: "", lastName: "" })

    return (
        <div>
            <div>
                <p>First Name: - {name.firstName}</p>
                <p>Last Name: - {name.lastName}</p>
            </div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value })}
                />
            </form>
        </div>
    )
}

export default FormHook
