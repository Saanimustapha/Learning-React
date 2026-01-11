import { useState } from "react"

export const ToDoList = () => {

    const [items, setItems] = useState(
        [{id:1,text:"First Item"},
        {id:2,text:"Second Item"},
        {id:3,text:"Third Item"}
        ]
    )



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
        </>

    )
}