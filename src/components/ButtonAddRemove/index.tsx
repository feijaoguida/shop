import React, { useContext } from "react";
import Button from "../Button";

import { Container, Input } from './styles'
import { CartContext } from "../../contexts/CartContext";

function ButtonAddRemove({ product, children }: any) {
  const { handlerAddCart, handlerRemoveCart } = useContext(CartContext)

  return (
    <Container>
      <Button onClick={() => handlerAddCart(product)}>
        +
      </Button>
      <Input type="number" value={children} />
      <Button onClick={() => handlerRemoveCart(product)}>
        -
      </Button>
    </Container>
  )
}

export default ButtonAddRemove