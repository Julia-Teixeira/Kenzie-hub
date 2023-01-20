import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  min-height: 3rem;

  background: var(--color-grey-2);
  border: 1.2182px solid var(--color-grey-2);
  border-radius: 0.25rem;

  color: var(--color-grey-0);
  font-size: var(--fontSize-3);
  font-weight: var(--regular);
  padding-left: 1rem;

  cursor: pointer;

  &::placeholder {
    color: var(--color-grey-1);
  }
  &:focus {
    color: var(--color-grey-0);
    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-0);
    outline: none;
  }

  @media (min-width: 1024px) {
    font-size: var(--fontSize-2);
  }
`;
