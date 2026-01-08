import { useState } from "react"

export const SimpleCounterTwo = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) =>prev + 1 );
        setCount((prev) =>prev + 5 );
        setCount((prev) =>prev + 10 );
    }


    return (
        <>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}