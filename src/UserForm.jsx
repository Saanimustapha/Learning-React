import { ActionButton } from "./ActionButton"

export const UserForm = () => {

    const handleClick = () => {
        alert("Successfully submitted user credentials")
    }

    return (
        <>
        <h2>User Form</h2>
        <ActionButton text="Submit your user credentials" onClick={handleClick}/>
        </>
    )
}