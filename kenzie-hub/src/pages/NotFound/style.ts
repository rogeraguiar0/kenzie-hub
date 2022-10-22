import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 80px);
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  font-family: var(--font-family);
  position: relative;
  z-index: 0;

  & > div {
    margin-top: 50px;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    transform: translateY(-100%);
  }

  & > div > svg {
    font-size: 20px;
  }

  & > div span {
    color: var(--color-primary);
  }
`;
