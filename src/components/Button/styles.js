import styled, { css } from "styled-components";

export const ButtonForm = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.2538rem;

  font-weight: var(--semi-bold);
  font-size: var(--fontSize-4);
  color: var(--color-grey-0);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  @media (min-width: 1024px) {
    font-size: var(--fontSize-2);
  }

  ${(props) => {
    switch (props.typeButton) {
      case "submit":
        return css`
          background: var(--color-primary);
          border: 0.0761rem solid var(--color-primary);

          &:hover {
            background: var(--color-primary-focus);
            border: 0.0761rem solid var(--color-primary-focus);
          }

          &:disabled {
            cursor: not-allowed;
            background: var(--color-primary-negative);
            border: 0.0761rem solid var(--color-primary-negative);
          }
        `;
      case "button":
        return css`
          background: var(--color-grey-1);
          border: 0.0761rem solid var(--color-grey-1);

          &:hover {
            background: var(--color-grey-2);
            border: 0.0761rem solid var(--color-grey-2);
          }
        `;
      case "default":
        return css`
          background: var(--color-grey-3);
          border: 0.0761rem solid var(--color-grey-3);
          width: max-content;
          height: 1.9969rem;
          padding: 0.3rem 1.6106rem;
          &:hover {
            background: var(--color-grey-2);
            border: 0.0761rem solid var(--color-grey-2);
          }

          @media (min-width: 1024px) {
            height: 3.5069rem;
            padding: 0 1rem;
          }
        `;
      case "img":
        return css`
          background: var(--color-grey-3);
          border: 0.0761rem solid var(--color-grey-3);
          width: 2.0306rem;
          height: 2rem;

          &:hover {
            background: var(--color-grey-2);
            border: 0.0761rem solid var(--color-grey-2);
          }

          @media (min-width: 1024px) {
            padding: 0;
          }
        `;
      default:
        return css`
          background: transparent;
          border: none;
          width: 2.0306rem;
          height: 2rem;

          @media (min-width: 1024px) {
            padding: 0;
          }
        `;
    }
  }}

  ${(props) => {
    if (props.page === "edit") {
      return css`
        width: 204px;
      `;
    }
  }}
`;
