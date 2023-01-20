import styled, { css } from "styled-components";

export const NavTag = styled.nav`
  display: flex;
  align-items: center;

  max-width: 23.0625rem;
  padding: 2.125rem 1.125rem;
  margin: 0 auto;

  ${(props) => {
    switch (props.button) {
      case false:
        return css`
          justify-content: center;
          @media (min-width: 1024px) {
            padding: 2.125rem 0;
          }
        `;
      case true:
        return css`
          justify-content: space-between;
          @media (min-width: 1024px) {
            padding: 2.125rem 0;
          }
        `;

      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.page) {
      case "dashboard":
        return css`
          background-color: var(--color-grey-4);
          max-width: 48.75rem;
          width: 100%;
          padding: 1.625rem 0.625rem 2.0231rem 0.625rem;
          position: fixed;
          top: 0;
          z-index: 1;

          @media (min-width: 1024px) {
            padding: 24px 0 !important;
          }
        `;
      default:
        return false;
    }
  }}
`;
