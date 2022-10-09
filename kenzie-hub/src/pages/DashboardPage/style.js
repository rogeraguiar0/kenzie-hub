import styled from "styled-components";

export const Container = styled.main`
  padding-top: 50px;
  height: calc(100vh - 190px);
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-4);
  font-family: var(--font-family);

  & > div {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--color-grey-0);
    font-size: var(--title-size);
    opacity: 0;
  }
`;
