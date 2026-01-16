import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Avatar = () => {

    const user = useContext(UserContext)
    return (
        <div>
            Welcome!!...{user.name}
        </div>
    )
}