import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: #212934;

  @media (max-width: 678px) {
    flex-direction: column;
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

export const TopText = styled.p`
  font-size: 0.7em !important;
  font-family: "Roboto", sans-serif;
  font-weight: 300 !important;
  color: #cfd6e1 !important;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
