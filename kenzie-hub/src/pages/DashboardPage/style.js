import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 190px);
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-4);
  font-family: var(--font-family);

  & > div {
    width: 100%;
    max-width: 1000px;
  }
`;

export const AddTecnologies = styled.div`
  padding: 30px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-0);
  font-size: var(--title-size);

  & > button {
    padding: 7px 9px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-grey-3);
    cursor: pointer;
  }

  & svg {
    fill: var(--color-grey-0);
  }
`;
