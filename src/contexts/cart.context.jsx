import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems,productToAdd) => {
  //  find if cartitems contains productAdd
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // if found
  if(existingCartItem){
    return cartItems.map((cartItem) => 
    cartItem.id === productToAdd.id 
    ? {...cartItem , quantity: cartItem.quantity + 1 } 
    : cartItem
    )
  }
  return [...cartItems, {...productToAdd, quantity: 1}];

}

const removeItem = (cartItems,productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  return cartItems.map((cartItem) => 
  cartItem.id === productToRemove.id 
  ? {...cartItem , quantity: cartItem.quantity - 1 } 
  : cartItem
  )
}



const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {} ,
  removeItemFromCart: () => {} ,
  clearItemFromCart: () => {} ,
  cartCount:0,
  total: 0
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity, 0 );
    setCartCount(newCartCount);
  },[cartItems])

  useEffect(() => {
    const newCartTotal= cartItems.reduce((total,cartItem) => total + cartItem.quantity * cartItem.price, 0 );
    setCartTotal(newCartTotal);
  },[cartItems])

  const addItemToCart = (product) =>{
      setCartItems(addCartItem(cartItems,product));
      
  }
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems,productToRemove));
  }
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value =
   { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems,
    addItemToCart, 
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

