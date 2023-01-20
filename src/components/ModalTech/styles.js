import styled from "styled-components";

export const SectionModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  background: rgba(18, 18, 20, 0.5);
  width: 100vw;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const DivModal = styled.div`
  background: var(--color-grey-3);
  max-width: 23.0625rem;
  width: 100%;

  margin: 0 auto;
  border-radius: 0.2005rem;
`;

export const HeaderModal = styled.header`
  height: 2.5069rem;
  width: 100%;
  background: var(--color-grey-2);
  border-radius: 3.20867px 3.20867px 0px 0px;

  & > div {
    padding: 5px 1rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > h2 {
    font-weight: var(--bold);
    font-size: 0.7019rem;
    line-height: 1.1875rem;
    color: var(--color-grey-0);

    @media (min-width: 1024px) {
      font-size: var(--fontSize-3);
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 22px;
`;
