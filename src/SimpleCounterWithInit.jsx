import { useReducer } from "react";


const initialCount = 0;

const init = (initialValue) => {

    const storedValue = localStorage.getItem("count");

    if(storedValue !== null){
        return parseInt(storedValue);
    }

    return initialValue;
}

const updateFunction = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialCount
    }
}

export const SimpleCounterWithInit = () => {

    const [count, dispatch] = useReducer(updateFunction,initialCount,init);

    localStorage.setItem("count", count);

    return (
        <>
        <h2>Count: {count}</h2>
        <div>
            <button onClick={() => dispatch('increment')}>Increment</button>
        </div>
        <div>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
        <div>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
        </>
        

    )
}