import { useState } from "react"

export const UserProfile = () => {

    const [user, setUser] = useState(
        {name: "Daddy",
        age: 15,
        address: {
            city: "New York",
            country: "USA"
        }
        }
    )

    const changeName = () => {
        setUser(
            {...user,
            name: "Saani"}
        )
    }

    const changeAge = () => {
        setUser(
            {...user,
            age: 20}
        )
    }

    const changeCity = () => {
        setUser(
            {...user,
            address: {
                ...user.address,
                city: "Miami"
            }}
        )
    }


    return(
        <>
        <h3>{user.name}</h3>
        <p>Age: {user.age}</p>
        <p>City: {user.address.city}</p>
        <p>Country: {user.address.country}</p>
        <button onClick={changeName}>Change name</button>
        <button onClick={changeAge}>Change age</button>
        <button onClick={changeCity}>Change city</button>
        </>
    )
}