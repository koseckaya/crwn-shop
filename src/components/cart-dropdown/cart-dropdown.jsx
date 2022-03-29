import {CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style.jsx'
import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import Button from '../button/button'
import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../context/cart.context'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                       cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
                    ) : (
                        <EmptyMessage>Cart is empty</EmptyMessage>
                    )
                }
                
            </CartItems>
           <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown