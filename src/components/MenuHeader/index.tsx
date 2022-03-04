import React from "react";

import * as s from "./styles";

import logo from '../../assets/logo.png'

function MenuHeader() {
  return (
    <s.Container>
      <s.Top>
        <s.Logo>
          <img src={logo} alt="Logo Liven" />
        </s.Logo>
        <s.Menu>
          <s.Linked to="/">Home</s.Linked>
          <s.Linked to="/shop">Loja</s.Linked>
          <s.Linked to="/about">Sobre</s.Linked>
        </s.Menu>
      </s.Top>
    </s.Container>
  )
}

export default MenuHeader