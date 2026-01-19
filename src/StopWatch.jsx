import { useState, useRef } from "react"

export const StopWatch = () => {
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)

    const addTime = () => {
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 1)
        },1000)
    }

    const subTime= () => {
        clearInterval(intervalRef.current)
    }


    return(
        <div>
            <p>time: {time}</p>
            <button onClick={() => addTime()}>Start</button>
            <button onClick={() => subTime()}>Stop</button>
        </div>
    )
}
