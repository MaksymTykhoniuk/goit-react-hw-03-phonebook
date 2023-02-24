import styled from '@emotion/styled';

export const FilterInput = styled.input`
  height: 36px;
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid #f6ead4;
  outline: none;
  font-weight: bold;
  background-color: transparent;
  color: #e0a96d;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 10px;
  border: 1px solid #e0a96d;
  color: #e0a96d;
  background-color: transparent;
  transition: scale 250ms linear;

  :hover,
  :focus {
    scale: 1.1;
  }
`;
