import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 190px);
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-4);
  font-family: var(--font-family);

  & > div {
    position: relative;
    z-index: 0;
    width: 100%;
    max-width: 1000px;
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const AddTecnologies = styled.div`
  padding: 30px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-0);
  font-size: var(--title-size);

  & svg {
    fill: var(--color-grey-0);
  }
`;
