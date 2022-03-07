import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const TitleCategories = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 30px !important;
  font-weight: 300;
  padding-bottom: 1.5rem !important;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #212529;
`;

export const MenuCategories = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;
  display: flex;
  flex-direction: column;
`;

export const LinkCategories = styled.a`
  margin-top: 0.5em;
  margin-bottom: 1rem;
  text-align: -webkit-match-parent;
  text-decoration: none;
  color: #212529;
  cursor: pointer;
`;

export const RightSide = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const CardsDiv = styled.div`
  line-height: 1.5;
  width: 100%;
  max-width: 1024px;
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
`;
