import { useRef } from "react"

export const FocusInput = () => {
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Enter your name" />
            <button onClick={() => focusInput()}>Focus</button>
        </div>
    )
}