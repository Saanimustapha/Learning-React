//Demonstrating nested props
export const UserInfo = ({name, age, city}) => {
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        </>
    )
}