import styled from "styled-components";

export const Text = styled.p`
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
