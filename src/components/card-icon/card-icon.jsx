import {ShoppingIcon, CartIconContainer, ItemCount} from './card-icon.style.jsx'

import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'


const CartIcon = () => {
    //const { isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext)

const dispatch = useDispatch()
 const cartCount = useSelector(selectCartCount)
 const isCartOpen = useSelector(selectCartIsOpen)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon