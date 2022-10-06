import { useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
const CartDropdown = () =>  {
    const [isCartOpen, setIsCartOpen] = useState(CartContext);
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items' /> 
        <Button>CHECKOUT</Button>
        </div>
    );
}

export default CartDropdown;