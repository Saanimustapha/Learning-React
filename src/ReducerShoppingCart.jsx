import { useReducer } from "react"

const initialState = {
    items:[],
    totalAmount:0,
    totalItems:0
}

const stateUpdater = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            const updatedItems = [...state.items, action.payload]
            const updatedAmount = state.totalAmount + action.payload.price
            const updatedTotalItems = state.totalItems + 1

            return {
                items: updatedItems,
                totalAmount: updatedAmount,
                totalItems: updatedTotalItems
            }

        case 'REMOVE_FROM_CART':
            const updatedItemsAfterRemoval = state.items.filter((item) => item.id !== action.payload.id)
            const updatedAmountAfterRemoval = state.totalAmount - action.payload.price
            const updatedTotalItemsAfterRemoval = state.totalItems - 1

            return {
                items: updatedItemsAfterRemoval,
                totalAmount: updatedAmountAfterRemoval,
                totalItems: updatedTotalItemsAfterRemoval
            }

        default:
            return state
    }
}

export const ReducerShoppingCart = () => {

    const [cartState, dispatch] = useReducer(stateUpdater, initialState)

    return (
        <>
        <Products dispatch={dispatch}/>
        <ShoppingCart cartState={cartState} dispatch={dispatch}/>
        </>
    )

}



export const ShoppingCart = ({cartState,dispatch}) => {

    if (cartState.totalItems === 0){
        return (
            <>
            <h2>Your Shopping Cart</h2>
            <p>Your cart is empty</p>
            </>
        )
    } else {

        const itemViews = cartState.items.map((item) => {
            return (
                <div>
                    {item.name}
                    <button onClick={() => dispatch({type:'REMOVE_FROM_CART',payload:item})}>Remove From Cart</button>
                </div>
            )
        })

        return (
            <>
            <h2>Your Shopping Cart</h2>
            {itemViews}
            <p>Total Items: {cartState.totalItems}</p>
            <p>Total Amount: ${cartState.totalAmount}</p>
            </>
        )
    }

}
        


export const Products = ({dispatch}) => {

    const products = [
        {id:1, name:"Book", price:10},
        {id:2, name:"Pen", price:5},
        {id:3, name:"Notebook", price:15}
    ]

    const productViews = products.map((product) => {
        return (
            <div key={product.id}>
                <div>
                    {product.name} - ${product.price}
                </div>
                <button onClick={() => dispatch({
                    type: 'ADD_TO_CART',
                    payload: product
                })}>Add To Cart</button>
            </div>
        )
    })


    return (
        <>
        <h2>Products</h2>
        {productViews}
        </>
    )
}