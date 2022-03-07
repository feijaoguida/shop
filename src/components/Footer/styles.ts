import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 2rem;
  background-color: #212934;

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1020px;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;
