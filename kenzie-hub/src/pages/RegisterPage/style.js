import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-grey-4);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > div {
    height: 100%;
    width: 100%;
    max-width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: var(--font-family);
  opacity: 0;
  transform: translateX(-100%);
`;

export const Card = styled.div`
  padding: 10px;
  height: fit-content;
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  border-radius: 4px;
  background-color: var(--color-grey-3);
  text-align: center;
  font-family: var(--font-family);
  opacity: 0;
  transform: translateX(-100%);

  & > h2 {
    color: var(--color-grey-0);
    font-size: var(--title-size);
  }

  & > p {
    color: var(--color-grey-2);
    font-size: var(--text-size);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > label {
    margin: 3px 0 0 0;
    align-self: flex-start;
    color: var(--color-grey-1);
    font-size: var(--text-size);
  }

  & > button {
    margin-top: 5px;
  }

  & > span {
    align-self: flex-start;
    color: #e83f5b;
    font-size: var(--text-size);
  }
`;
