import styled from "styled-components";

export const Fieldset = styled.fieldset`
  max-width: 329.93px;
  width: 100%;
  height: 84.69px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border: none;
  padding-top: 1.25rem;

  &:focus-within {
    input {
      border: 1.2182px solid var(--color-grey-0);
      outline: none;
    }
    input::placeholder {
      color: var(--color-grey-0);
    }
  }
`;

export const FieldsetLegend = styled.legend`
  font-weight: var(--regular);
  font-size: var(--fontSize-4);
  color: var(--color-grey-0);
`;

export const FieldsetInput = styled.input`
  width: 100%;
  min-height: 3rem;

  background: var(--color-grey-2);
  border: 1.2182px solid var(--color-grey-2);
  border-radius: 0.25rem;

  color: var(--color-grey-0);
  font-size: var(--fontSize-3);
  font-weight: var(--regular);
  padding-left: 1rem;

  &::placeholder {
    color: var(--color-grey-1);
  }
  &:focus {
    color: var(--color-grey-0);
    background: var(--color-grey-2);
  }

  @media (min-width: 1024px) {
    font-size: var(--fontSize-2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const FieldsetSpan = styled.span`
  color: var(--feedback-negative);
  font-weight: var(--regular);
  font-size: 0.6345rem;
`;
