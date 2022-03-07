import styled from "styled-components";

export const CardDisplay = styled.div`
  display: flex;

  flex-direction: column;
  padding: 1rem 1rem;
  width: 32%;

  position: relative;
  min-width: 250px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  margin-bottom: 1em;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

export const CardOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;
