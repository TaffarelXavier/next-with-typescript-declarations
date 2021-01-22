import { createContext } from 'react';

const CartContext = createContext<API.Cart>({} as API.Cart);

export default CartContext;
