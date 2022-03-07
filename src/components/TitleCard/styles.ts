import styled from "styled-components";

export const Text = styled.p`
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
