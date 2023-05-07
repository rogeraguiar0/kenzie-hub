import styled from "styled-components";

export const ModalBg = styled.div`
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000040;
  font-family: var(--font-family);
`;

export const ModalCard = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: var(--color-grey-3);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px 4px 0 0;
  background-color: var(--color-grey-2);
  color: var(--color-grey-0);
  font-size: var(--title-size);

  & > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  & > button > svg {
    font-size: 20px;
    fill: var(--color-grey-1);
  }
`;

export const Formulary = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > label {
    color: var(--color-grey-0);
    font-size: var(--text-size);
  }

  & > span {
    color: #e83f5b;
    font-size: var(--text-size);
  }
`;
