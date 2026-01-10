import { useState } from "react"


export const BatchUpdate= () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 5)
        setCount((prev) => prev + 10)

        setName("Saani")

        setIsActive(true)
    }

    return (
        <>
        <p>Count: {count} </p>
        <p>Name: {name} </p>
        <p>isActive: {isActive? "Yes" : "No"} </p>
        <button onClick={handleClick}>Update all three</button>
        </>
    )
}