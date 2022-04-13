import {CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style.jsx'

import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Button from '../button/button'
import CartItem from '../cart-item/cart-item'

import { selectCartItems } from '../../store/cart/cart.selector.js'

const CartDropdown = () => {
    const  cartItems  = useSelector(selectCartItems)
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