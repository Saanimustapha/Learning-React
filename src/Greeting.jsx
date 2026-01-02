//Prop patterns (Default prop values)
export const Greeting = ({person="Guest", message="Hello"}) =>{
    return (
        <>
        <h2>
            {person}, {message}
        </h2>
        </>
    )
}