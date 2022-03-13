import React, { useContext, useEffect, useState } from "react";
import Main from "../Layout/Main";

import {
  Container,
  Body,
  AreaCart,
  Title,
  ItemsCart
} from './styles'

import ItemCart from '../../components/ItemCart'
import { CartContext } from "../../contexts/CartContext";


function Cart() {
   
  const { cart } = useContext(CartContext)

  return (
    <Main>
      <Container>
        <Body>
          <AreaCart>
            <Title>
              Carrinho de Compras
            </Title>
            <ItemsCart>
              {cart.map(c => (
                <ItemCart product={c.product} quantity={c.quantity} />
              ))}
            </ItemsCart>
          </AreaCart>
        </Body>
      </Container>
    </Main>
  )
} 

export default Cart;

