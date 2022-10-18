import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    text-align: center;
  }

  & p {
    color: var(--color-grey-1);
  }

  & span {
    color: var(--color-primary);
  }

  & > div > svg {
    font-size: 18px;
    fill: var(--color-primary);
  }

  @media (max-width: 768px) {
    & > div {
      gap: 10px;
      flex-direction: column;
    }
  }
`;

export const Container2 = styled.section`
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-grey-3);
`;

export const Tech = styled.article`
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: var(--color-grey-4);

  & > h4 {
    color: var(--color-grey-0);
    font-size: 14px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & > div > p {
    font-size: var(--text-size);
  }

  & > div > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  & > div svg {
    font-size: 20px;
    fill: var(--color-grey-1);
  }

  &:hover {
    background-color: var(--color-grey-2);
    transition: 0.4s;
  }
`;
