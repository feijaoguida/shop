import React from "react";

import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";

import { Container } from './styles'

function Main({ children }: any) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Main