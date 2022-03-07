import React, { useEffect, useState } from "react";

import { Api } from "../../services/api";

import Button from "../../components/Button";
import Main from "../Layout/Main";

import {
  Container,
  Body,
  Section,
  TituloCategorias,
  TextCategorias,
  Categories,
  Display,
  CardsDiv,
} from './styles'
import DisplayCard from "../../components/DisplayCard";

import hero from '../../assets/hero.jpg'



function Home(props: any) {
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    async function loadProducts() {
      await Api.get('?limit=6').then(res => setProducts(res.data))
        .catch((error) => {
          alert("Ops! Ocorreu um erro ao carregar os produtos" + error)
        })
    }

    async function loadCategories() {
      await Api.get('categories').then(res => setCategories(res.data))
        .catch((error) => {
          alert("Ops! Ocorreu um erro ao carregar as categorias")
        })
    }

    loadProducts()
    loadCategories()
     
  }, []);


  return (
    <Main>
      <Container>
        <Body>
          <Section
            image={hero}
          >
            <div>
              <TituloCategorias>
                LIVEN SHOP
              </TituloCategorias>
              <TextCategorias>
                valorizando o que há de melhor.
              </TextCategorias>
            </div>
          </Section>
          <Section>
            <TituloCategorias>
              Categorias.
            </TituloCategorias>
            <Categories>
              {categories.map(category => (
                <div key={category}>
                  <p>{ category }</p>
                  <Button>acessar</Button>
                </div>
                
              ))}
            </Categories>
          </Section>
          <Display>
            <TituloCategorias>Produtos</TituloCategorias>
            <TextCategorias>Seleção dos produtos</TextCategorias>
              <CardsDiv>
                {products.map(p => (
                  <DisplayCard product={p}/>
                ))}
            </CardsDiv>
          </Display>
        </Body>
        
      </Container>
    </Main>
  )
}

export default Home