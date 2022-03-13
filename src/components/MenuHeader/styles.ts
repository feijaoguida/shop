import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: #fff;
  border: solid 1px #fff;

  box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.37);

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  img {
    height: 70px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1020px;

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;

  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Linked = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.2em;
  margin: 0 5px;
`;

export const CartIcon = styled.div`
  display: flex;
  flex-direction: row;

  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
