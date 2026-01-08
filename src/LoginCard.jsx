import { useState } from "react"

//Using usestate with boolean values
export const LoginCard = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }


    return (
        <button onClick={handleClick}>{isLoggedIn? "Log Out" : "Log In"}</button>
    )
}