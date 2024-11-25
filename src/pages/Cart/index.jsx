import { useContext } from "react";
import { CartContext } from "../../context/cartContext";


const Cart = () => {
    const { cartList, deleteItem, modifyCartList } = useContext(CartContext)

    return <div>
        <ul>
            {cartList.map((product) => {
                const price = product.amount * Number(product.price)
                return (
                    <li key={product.id}>
                        {product.title} amount: {product.amount} price: {price.toFixed(2)}
                        <button onClick={() => deleteItem(product.id)}>Remove</button>
                    </li>
                )
            })}
        </ul>
    </div>
}

export default Cart;