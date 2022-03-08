import React, {useContext}  from "react";

import { 
  CardDisplay,
  CardOptions
} from './styles'
  
import { TitleCard } from '../../components/TitleCard'
import { TextCard } from "../TextCard";
import Button from "../Button";

import { CartContext } from '../../contexts/CartContext'

interface Product {
  id: string,
  image: string,
  rating: { rate: string },
  price: string,
  title: string,
  description: string
}

interface Products {
  product: Product
}


export default function DisplayCard(product: Products) {
  const { cart, handlerAddCart, handlerRemoveCart } = useContext(CartContext)

  return (
    <CardDisplay key={product.product.id}>
      <img src={product.product.image} alt="" />
      <CardOptions>
        <span>
          {product.product.rating.rate}
        </span>
        <span>{product.product.price}</span>

      </CardOptions>
      <TitleCard>
        {product.product.title}
      </TitleCard>
      <TextCard>{product.product.description}</TextCard>
      <Button onClick={() => handlerAddCart(product.product.id)} >Comprar</Button>
    </CardDisplay>
  )
} 