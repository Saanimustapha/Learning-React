export const Product = ({name,price,instock}) => {
    return (
        <>
        <h1>Product name: {name}</h1>
        <p>Product price: ${price}</p>
        <p>Available: {instock? "Yes":"No"}</p>
        </>
    )
}