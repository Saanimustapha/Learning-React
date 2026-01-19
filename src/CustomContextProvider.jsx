import { useState } from 'react'
import { UserContext } from "./UserContext"

export const CustomContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "saani",
        role:"admin",
        theme:"dark"
    })

    return (
        <UserContext value={{user,setUser}}>
            {children}
        </UserContext>
    )
}