import React, {useContext} from "react";

import { Container, Top, Logo, Menu, Linked, CartIcon} from "./styles";

import { CartContext } from '../../contexts/CartContext'

import logo from '../../assets/logo.png'

function MenuHeader() {

  const { totalCart } = useContext(CartContext)

  return (
    <Container>
      <Top>
        <Logo>
          <img src={logo} alt="Logo Liven" />
        </Logo>
        <Menu>
          <Linked to="/">Home</Linked>
          <Linked to="/shop">Loja</Linked>
          <Linked to="/about">Sobre</Linked>
        </Menu>
        <CartIcon>
          <Linked to="/cart">Cart = {totalCart}</Linked>
        </CartIcon>
      </Top>
    </Container>
  )
}

export default MenuHeader