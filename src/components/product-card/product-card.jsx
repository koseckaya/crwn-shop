import './product-card.scss'
import Button, { BUTTON_TYPE } from '../button/button'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard