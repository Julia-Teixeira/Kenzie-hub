import styled from "styled-components";

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem;
`;

export const SpanLogin = styled.span`
  font-weight: var(--semi-bold);
  font-size: var(--fontSize-5);
  color: var(--color-grey-1);

  @media (min-width: 1024px) {
    font-size: var(--fontSize-4);
  }
`;
