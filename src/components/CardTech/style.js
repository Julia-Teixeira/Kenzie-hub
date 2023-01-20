import styled from "styled-components";

export const TechLi = styled.li`
  max-width: 742px;
  width: 100%;
  height: 48.73px;
  background-color: var(--color-grey-4);
  border-radius: 0.2538rem;
  padding: 0.8125rem 1.3887rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
  }
`;

export const TechH3 = styled.h3`
  font-weight: var(--bold);
  font-size: var(--fontSize-3);
  line-height: 1.5rem;
  color: var(--color-grey-0);
`;

export const TechDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.3756rem;

  max-width: 8.625rem;
  width: 100%;
  height: 1.375rem;
`;

export const TechP = styled.p`
  font-weight: var(--regular);
  font-size: var(--fontSize-4);
  line-height: 1.375rem;
  color: var(--color-grey-1);
`;

export const TechButton = styled.button`
  width: 2rem;
  height: 2rem;
`;
