import React from "react";
import Button from "../Button";

import { Container, Image, Card, Title, Description, Value, Actions, Quantity } from './styles'

import { Product } from '../../interfaces/products'
import ButtonAddRemove from "../ButtonAddRemove";

type CartProps = {
  product: Product;
  quantity: number;
} 

const image = "https://i0.wp.com/umode.com.br/wp-content/uploads/2020/08/o_que_e_como_criar_colecao_moda_unsplash.jpg?fit=1200%2C800&ssl=1"

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