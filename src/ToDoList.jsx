import { useState } from "react"

export const ToDoList = () => {

    const [items, setItems] = useState(
        [{id:1,text:"First Item",done:false},
        {id:2,text:"Second Item",done:false},
        {id:3,text:"Third Item",done:false}
        ]
    )


    const addItem = (e) => {
        const newItems = [...items, {id:Date.now, text:"Fourth Item",done:false}];
        setItems(newItems)
    }

    const removeItem = (id) => {
        const newItems = items.filter((item) => item.id != id)
        setItems(newItems)
    }

    const toggleDone = (id) => {
        setItems(items.map((item) => {
            if(item.id === id){
                return (
                    {...item,done: !item.done}
                )
            }
            return item
        }))
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
                            {item.done && item.text}
                            <button onClick={() => removeItem(item.id)}>Remove Item</button>
                            <button onClick={() => toggleDone(item.id)}>Toggle done</button>
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