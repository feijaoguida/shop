import React, { useEffect, useState } from "react";
import Main from "../Layout/Main";

import { Api } from "../../services/api";

import { Body, Container,LeftSide, TitleCategories, MenuCategories, RightSide, LinkCategories, CardsDiv} from './styles'
import DisplayCard from "../../components/DisplayCard";

export default function Shop() {

  const [products, setProducts] = useState<any[]>([])
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])


  useEffect(() => {
    async function loadProducts() {
      await Api.get('').then(res => {
        setAllProducts(res.data);
        setProducts(res.data)
      })
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

  function filtrarCatetorias(category: string) {

    if (category === 'all') {
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter(p => p.category === category))
    }
    

  }


  return (
    <Main>
      <Container>
        <Body>
          <LeftSide>
            <TitleCategories>
              Categorias
            </TitleCategories>
            <MenuCategories>
              <LinkCategories
                onClick={() => filtrarCatetorias('all')}>
                All Catogories
                </LinkCategories>
              {categories.map(c => (
                <LinkCategories
                  onClick={() => filtrarCatetorias(c)}
                >{c}</LinkCategories>
              ))}
            </MenuCategories>
          </LeftSide>
          <RightSide>
            <TitleCategories>
              Produtos { }
              </TitleCategories>
            <CardsDiv>
                {products.map(p => (
                  <DisplayCard product={p}/>
                ))}
            </CardsDiv>
          </RightSide>
        </Body>
      </Container>
    </Main>
  )
}