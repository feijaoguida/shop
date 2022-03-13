import React, {useContext}  from "react";

import { 
  CardDisplay,
  CardOptions
} from './styles'
  
import { TitleCard } from '../../components/TitleCard'
import { TextCard } from "../TextCard";
import Button from "../Button";

import { CartContext } from '../../contexts/CartContext'

import { Products } from '../../interfaces/products'

export default function DisplayCard(product: Products) {
  const { handlerAddCart } = useContext(CartContext)

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
      <Button onClick={() => handlerAddCart(product.product)} >Comprar</Button>
    </CardDisplay>
  )
} 