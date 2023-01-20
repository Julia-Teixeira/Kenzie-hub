import styled, { css } from "styled-components";

export const FormStyle = styled.form`
  margin: 0 0.75rem;
  max-width: 23.0625rem;
  padding: 2.125rem 1.125rem;
  background-color: var(--color-grey-3);
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 400px) {
    margin: 0 auto;
  }

  ${(props) => {
    if (props.padding) {
      return css`
        padding: 1.125rem 1.125rem;
      `;
    }
  }}
`;

export const FormTitle = styled.h1`
  font-weight: var(--bold);
  font-size: 0.9024rem;
  color: var(--color-grey-0);
  text-align: center;

  @media (min-width: 1024px) {
    font-size: var(--fontSize-1);
  }
`;
