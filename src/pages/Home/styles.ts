import styled, { css } from "styled-components";

interface ImageProps {
  image?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const IMAGE = css`
  width: 100%;
  height: 350px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`;

export const Section = styled.section<ImageProps>`
  display: flex;
  flex-direction: column;
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  align-items: center;
  width: 100%;

  ${(props: ImageProps) => props.image && IMAGE}
  background-image: url(${(props: ImageProps) => props.image});

  div {
    max-width: 1024px;
  }
`;

export const TituloCategorias = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 48px !important;
  font-weight: 300 !important;
`;

export const TextCategorias = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;
  text-align: center;
`;

export const Categories = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

export const Display = styled.section`
  background-color: #e9eef5 !important;
  line-height: 1.5;
  width: 100%;
  display: flex;
  align-items: center;
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
