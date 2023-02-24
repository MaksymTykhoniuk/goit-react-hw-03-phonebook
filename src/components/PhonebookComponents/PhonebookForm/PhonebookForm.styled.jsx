import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Btn = styled.button`
  padding-top: 5px;

  cursor: pointer;
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

export const Input = styled.input`
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid #f6ead4;
  outline: none;
  font-weight: bold;
  background-color: transparent;
  color: #e0a96d;

  ::placeholder {
    color: #f6ead4;
  }
`;
