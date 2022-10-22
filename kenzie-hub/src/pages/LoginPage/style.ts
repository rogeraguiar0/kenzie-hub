import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: var(--color-grey-4);
  font-family: var(--font-family);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  & > img {
    opacity: 0;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  padding: 15px;
  height: 70%;
  max-height: 400px;
  width: 100%;
  max-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 4px;
  background-color: var(--color-grey-3);
  text-align: center;
  opacity: 0;
  transform: translateX(-100%);

  & > h3 {
    margin-top: 15px;
    color: var(--color-grey-0);
    font-size: var(--title-size);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    align-self: flex-start;
    color: var(--color-grey-1);
    font-size: var(--text-size);
  }

  & > div {
    position: relative;
  }

  & > div button {
    position: absolute;
    top: 8px;
    right: 6px;
    border: none;
    background: none;
  }

  & > div svg {
    font-size: 15px;
    fill: var(--color-grey-1);
  }

  & > span {
    align-self: flex-start;
    color: #e83f5b;
    font-size: var(--text-size);
  }
`;

export const Extras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  & > p {
    color: var(--color-grey-1);
    font-size: var(--text-size);
  }
`;
