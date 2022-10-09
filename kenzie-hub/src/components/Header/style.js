import styled from "styled-components";

export const Container = styled.header`
  height: 110px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-2);
  background-color: var(--color-grey-4);
  font-family: var(--font-family);

  & > div {
    padding: 10px;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    transform: translateY(-100%);
  }

  & > div > h2 {
    color: var(--color-grey-0);
    font-size: var(--title-size);
  }

  & > div > p {
    color: var(--color-grey-1);
    font-size: var(--text-size);
  }

  & > div > h2 > svg {
    fill: var(--color-grey-0);
  }

  & > div > p > svg {
    fill: var(--color-grey-1);
  }

  @media (min-width: 768px) {
    & > div {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
