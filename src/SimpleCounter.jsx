import { useState } from 'react';

//Demonstrating the rendering process in React
export const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        //Each change is triggered and placed in a queue
        setCount(count + 1);
        setCount(count + 5);
        setCount(count + 10);
    }

    //Upon exit of the event handler, the last change is commited

    return (
        <>
        {/* The commited change is what is rendered */}
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
        </>
    )

}