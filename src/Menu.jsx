import { ActionButton } from "./ActionButton"

export const Menu = () => {

    const handleClick = () => {
        alert("You have succesfully placed your order")
    }

    return (
        <>
        <h2>Our Menu</h2>
        <p>Cheese</p>
        <p>Mozarella</p>
        <ActionButton text = "Submit your order" onClick={handleClick}/>
        </>
    )
}