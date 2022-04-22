import { Outlet } from 'react-router-dom'
import React, { Fragment } from 'react'
import CartIcon from '../../components/card-icon/card-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { selectCartIsOpen } from '../../store/cart/cart.selector'
import { signOutUser } from '../../utils/firebase/firebase'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.style'
import {  useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutStart } from '../../store/user/user.action'

const Navigation = () => {
    const dispatch = useDispatch()

   const currentUser = useSelector(selectCurrentUser)
  //  const { isCartOpen } = useContext(CartContext)
  const isCartOpen = useSelector(selectCartIsOpen)
    const signOutUser = () => dispatch(signOutStart())

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop" >SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (<NavLink to="/auth" >SIGN IN</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />

        </Fragment>
    )
}

export default Navigation