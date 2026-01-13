import { useState } from "react"

export const ShoppingCart = () => {

    const [cartItems, setCartItems] = useState(
        {
            reactCourse:0,
            vueCourse:0,
            angularCourse:0
        }
    )

    const [prices,setPrices] = useState(
        {
            reactCourse:9.99,
            vueCourse:15.99,
            angularCourse:12.99
        }
    )

    const onAddReactCourse = () => {
        setCartItems({...cartItems,reactCourse:cartItems.reactCourse + 1})
    }

    const onAddVueCourse = () => {
        setCartItems({...cartItems,vueCourse:cartItems.vueCourse + 1})
    }

    const onAddAngularCourse = () => {
        setCartItems({...cartItems,angularCourse:cartItems.angularCourse+1})
    }


    return (
        <>
        <ProductCard
        name="React Course"
        quantity={cartItems.reactCourse}
        price={prices.reactCourse}
        onAddToCart={onAddReactCourse}
        />
        <ProductCard
        name="Vue Course"
        quantity={cartItems.vueCourse}
        price={prices.vueCourse}
        onAddToCart={onAddVueCourse}
        />
        <ProductCard
        name="Angular Course"
        quantity={cartItems.angularCourse}
        price={prices.angularCourse}
        onAddToCart={onAddAngularCourse}
        />
        <CartItems cartItems={cartItems} prices={prices}/>
        </>
    )
}


export const ProductCard = ({name,quantity,price,onAddToCart}) => {

    return (
        <>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity:{quantity}</p>
        <button onClick={onAddToCart}>Add To Cart</button>
        </>
    )
}


export const CartItems = ({cartItems,prices}) => {

    const totalItems = 0;

    for (const [prod,qty] of Object.entries(cartItems)) {
        totalItems += qty
    }

    const totalPrice = 0

    for (const [prod,qty] of Object.entries(cartItems)) {
        totalPrice += qty * prices[prod]
    }

    return (
        <>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        </>
    )
}