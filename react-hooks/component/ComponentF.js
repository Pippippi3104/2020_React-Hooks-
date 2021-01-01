import React, { useContext } from 'react'
import { LanguageContext, UserContext } from "../App"

function ComponentF() {
    const user = useContext(UserContext)
    const language = useContext(LanguageContext)

    return (
        <div>
            {user.name}: {language}
            {/* <UserContext.Consumer>
                {
                    user => {
                        return (
                            <languageContext.Consumer>
                                {
                                    language =>{
                                        return <div>{user.name}: {language}</div>
                                    }
                                }
                            </languageContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
        </div>
    )
}

export default ComponentF
