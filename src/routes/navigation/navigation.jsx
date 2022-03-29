import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import CartIcon from '../../components/card-icon/card-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.style'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    if (false) {
        console.log(213);
        return <NavigationContainer />;
    }

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