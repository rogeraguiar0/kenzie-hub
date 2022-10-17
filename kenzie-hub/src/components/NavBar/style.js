import styled from "styled-components";

export const Container = styled.nav`
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-2);
  background-color: var(--color-grey-4);
  font-family: var(--font-family);
  position: relative;
  z-index: 2;

  & > div {
    padding: 0 10px;
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateY(-100%);
  }
`;
