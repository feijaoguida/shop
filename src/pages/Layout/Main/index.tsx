import React from "react";

import { CartProvider } from "../../../contexts/CartContext";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";

import { Container } from './styles'



function Main({ children }: any) {
  return (
    <CartProvider>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </CartProvider>
  )
}

export default Main