import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  padding: 2em;

  margin-bottom: 1em;

  background-color: #fff;
  border: solid 1px #fff;

  box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 10px 9px -4px rgba(0, 0, 0, 0.37);
`;

export const Image = styled.img`
  width: 300px;
  object-fit: contain;
  margin-right: 1em;
  max-height: 150px;
`;

export const Card = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 30px !important;
  color: #212529 !important;
  line-height: 1.2;

  font-weight: 300 !important;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;
  line-height: 1.2;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

export const Actions = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Value = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 24px !important;
  color: #212529 !important;
  line-height: 1.2;

  font-weight: 300 !important;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  width: 40%;
`;

export const Quantity = styled.div`
  width: 20%;
`;
