import { UserInfo } from "./UserInfo"

//Demonstrating component nesting
export const UserCard = ({name, ...props}) => {
    return(
        <>
        <h2>User Details of {name}</h2>
        <UserInfo {...props}/>
        </>
    )
}