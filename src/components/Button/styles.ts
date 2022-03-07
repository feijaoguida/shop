import styled, { css } from "styled-components";

interface ButtonProps {
  color?: "primary" | "secundary";
  disabled?: boolean;
}

const COLOR = {
  primary: css`
    background-color: #59ab6e !important;
    border-color: #56ae6c !important;

    font-family: "Roboto", sans-serif;
    font-size: 18px !important;
    font-weight: 300 !important;
    color: #fff;

    &:hover {
      opacity: 0.9;
    }
  `,
  secundary: css`
    color: #5f5f5f;

    background-color: initial;
    border: none;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  `,
};

const DISABLED = css`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #5f5f5f;

  cursor: not-allowed;
`;

export const Container = styled.button<ButtonProps>`
  font-family: "Roboto", sans-serif;
  font-size: 18px !important;
  font-weight: 300 !important;

  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;

  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  font-family: Roboto;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;
