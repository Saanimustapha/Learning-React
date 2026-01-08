import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(10);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>Count:{count}</button>
    )
}