import styled from "styled-components";

export const SectionDashboard = styled.section`
  position: relative;
  height: 100%;
`;
export const DivContainer = styled.div`
  max-width: 48.75rem;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderDashboard = styled.header`
  position: relative;
  top: 6.5rem;

  border-top: 0.0625rem solid var(--color-grey-3);
  border-bottom: 0.0625rem solid var(--color-grey-3);

  height: 8.1875rem;
  padding: 2.1875rem 0.75rem;

  & > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;
    max-width: 780px;
  }

  & > div > h2 {
    color: var(--color-grey-0);
    font-weight: var(--bold);
    font-size: var(--fontSize-1);
    line-height: 1.75rem;
  }

  & > div > p {
    color: var(--color-grey-1);
    font-weight: var(--regular);
    font-size: var(--fontSize-4);
    line-height: 1.375rem;
  }

  @media (min-width: 1024px) {
    height: 7.375rem;
    padding: 0;

    & > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 2.8125rem 0;
    }
  }
`;

export const SectionTechDashboard = styled.section`
  position: relative;
  top: 6.5rem;

  & > div {
    margin: 0 auto;
    max-width: 48.75rem;
    width: 100%;
    padding: 1.1875rem 0.75rem 0.875rem 0.75rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1024px) {
      font-size: var(--fontSize-2);
      padding: 1.1875rem 0;
    }
  }

  & > div > h2 {
    font-weight: var(--semi-bold);
    font-size: var(--fontSize-2);
    line-height: 1.125rem;
    color: var(--color-grey-0);
  }
`;

export const UlTechDashboard = styled.ul`
  padding: 0.75rem;
  max-width: 48.75rem;
  width: 100%;
  background: var(--color-grey-3);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div > h2 {
    text-align: center;
    font-weight: var(--semi-bold);
    font-size: var(--fontSize-2);
    line-height: 1.125rem;
    color: var(--color-grey-0);
  }
`;
