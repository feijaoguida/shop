import React, { createContext, ReactNode, useState } from "react";

type childrenProps = {
  children: ReactNode
}

 type CartProps = {
  id: string;
  quantity: number;
} 

type CartContextType = {
  cart: CartProps[],
  handlerAddCart: (newState: string) => void,
  handlerRemoveCart: (newState: string) => void
}

const initialState = {
  cart: [],
  handlerAddCart: () => {},
  handlerRemoveCart: () => {}
}

export const CartContext = createContext<CartContextType>(initialState);

export const CartProvider = ({ children }: childrenProps) => {
  const [cart, setCart] = useState<CartProps[]>([])

  function handlerAddCart(id: string) {
    const hasProduct = !!cart.filter(c => c.id === id).length;
      
    console.log("find = ", hasProduct)

    if (hasProduct) {
      let addedCart = cart.filter(cart => {
        if (cart.id === id) {
          return cart.quantity += 1
        }
        return cart
      })
      setCart(addedCart)
    } else {
      let addCart: CartProps = {
        id: id,
        quantity: 1,
      }
      setCart(prevState => [...prevState, ...[addCart]]
      );
    }
  }

  function handlerRemoveCart(id: string) {
    const hasProduct = cart.find(c => c.id === id)

    if (hasProduct) {
      setCart(cart.filter(cart => {
        if (cart.id === id) {
          if (cart.quantity > 0) 
            return cart.quantity -= 1
          
        }
        return cart
      }))
    } 
  }
  
  return (
    <CartContext.Provider value={{ cart, handlerAddCart, handlerRemoveCart }} >{ children }</CartContext.Provider>
  )
}