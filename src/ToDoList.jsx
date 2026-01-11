import { useState } from "react"

export const ToDoList = () => {

    const [items, setItems] = useState(
        [{id:1,text:"First Item"},
        {id:2,text:"Second Item"},
        {id:3,text:"Third Item"}
        ]
    )


    const addItem = (e) => {
        const newItems = [...items, {id:Date.now, text:"Fourth Item"}];
        setItems(newItems)
    }



    return (
        <>
        <div>To Do List</div>

        <div>
            <ul>
                {
                    items.map((item) => {
                        return (
                        <li key={item.id}>
                            {item.text}
                        </li>
                        )
                    })
                }
            </ul>
        </div>
        <button onClick={addItem}>Add Item</button>
        </>

    )
}