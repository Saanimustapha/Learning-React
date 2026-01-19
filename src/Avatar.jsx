import { use } from "react"
import { UserContext } from "./UserContext"

export const Avatar = () => {

    const {user, setUser} = use(UserContext)

    const toggleTheme = () => {
        setUser(
            {
                ...user,
                theme: user.theme==="dark"? "light" : "dark"
            }
        )
    }

    return (
        <div>
            <p>Welcome!!...{user.name}</p>
            <p>Theme: {user.theme}</p>
            <button onClick={() => toggleTheme()}>Toggle Theme</button>
        </div>
    )
}