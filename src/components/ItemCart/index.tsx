import React from "react";
import Button from "../Button";

import { Container, Image, Card, Title, Description, Value, Actions, Quantity } from './styles'

import { Product } from '../../interfaces/products'
import ButtonAddRemove from "../ButtonAddRemove";

type CartProps = {
  product: Product;
  quantity: number;
} 

function ItemCart({product, quantity}: CartProps) {
  return (
    <Container>
      <Image src={product.image} alt="">
      </Image>
      <Card>
        <Title>
          {product.title}
        </Title>
        <Description>
        {product.description}
        </Description>
        <Actions>
          <Value>
          {product.price}
          </Value>
          <ButtonAddRemove product={product}>
          {quantity}
          </ButtonAddRemove>
          <Quantity>
          
          </Quantity>
          <Button>
            Comprar
          </Button>

        </Actions>
      </Card>
    </Container>
  )
}

export default ItemCart