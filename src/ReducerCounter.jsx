import { useReducer } from "react"


const setCount = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return 0
        default:
            return state
    }
}

export const ReducerCounter = () => {

    const [count, dispatch] = useReducer(setCount,0)


    return (
        <>
        <h2>count:{count}</h2>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
        </>
    )
}