import { useState } from 'react';

export const Message = () => {

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <>
        <input type="text" placeholder="Enter some text" value={message} onChange={handleChange} />
        <p>{message}</p>
        </>
    )
}