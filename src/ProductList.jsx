import React from "react"

export const ProductList = () => {
    const products  = [
        {
            id:1,
            name:"Laptop",
            price:299
        },
        {
            id:2,
            name:"Tablet",
            price:399
        },
        {
            id:3,
            name:"Phone",
            price:499
        }
    ]

    const views =  products.filter((product) => product.price > 300).map((product) => {
                    return (
                        <React.Fragment key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        </React.Fragment>
                    )
                })

    return (
        <div>
            <h2>Our Products</h2>
            {views}
        </div>
    )
}