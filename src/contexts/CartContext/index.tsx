import React, { createContext, ReactNode, useEffect, useState } from "react";

import { Product } from '../../interfaces/products'

type childrenProps = {
  children: ReactNode
}

 type CartProps = {
  product: Product;
  quantity: number;
} 

type CartContextType = {
  cart: CartProps[],
  handlerAddCart: (newState: Product) => void,
  handlerRemoveCart: (newState: Product) => void
  totalCart?: number
}

const initialState = {
  cart: [],
  handlerAddCart: () => {},
  handlerRemoveCart: () => {}
}

export const CartContext = createContext<CartContextType>(initialState);

export const CartProvider = ({ children }: childrenProps) => {
  const [cart, setCart] = useState<CartProps[]>([])
  const [totalCart, setTotalCart] = useState<number>(0)

  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cartLiven')
    if (cartLocal) {
      setCart(JSON.parse(cartLocal))
    }
  }, [])

  useEffect(() => {
    setTotalCart(cart.length)
  }, [cart])

  function handlerAddCart(product: Product) {
    const hasProduct = !!cart.filter(c => c.product.id === product.id).length;

    if (hasProduct) {
      let addedCart = cart.filter(cart => {
        if (cart.product.id === product.id) {
          return cart.quantity += 1
        }
        return cart
      })
      window.localStorage.setItem('cartLiven', JSON.stringify(addedCart))
      setCart(addedCart)
    } else {
      let addCart: CartProps = {
        product: product,
        quantity: 1,
      }
      setCart(prevState => {
        const newCart = [...prevState, ...[addCart]]
        window.localStorage.setItem('cartLiven', JSON.stringify(newCart))
        return newCart
      }
      );
    }
  }

  function handlerRemoveCart(product: Product) {
    const hasProduct = cart.find(c => c.product.id === product.id)

    if (hasProduct) {
      setCart(cart.filter(cart => {
        if (cart.product.id === product.id) {
          if (cart.quantity > 0) 
            return cart.quantity -= 1
          
        }
        return cart
      }))
    } 
  }
  
  return (
    <CartContext.Provider value={{ totalCart, cart, handlerAddCart, handlerRemoveCart }} >{ children }</CartContext.Provider>
  )
}