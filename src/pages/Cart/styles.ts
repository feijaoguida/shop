import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1024px;
`;

export const AreaCart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 3em;
  margin-bottom: 2em;

  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;
  line-height: 1.2;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ItemsCart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  padding: 1em;
`;
