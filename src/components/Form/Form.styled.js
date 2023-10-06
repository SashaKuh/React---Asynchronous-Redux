import styled from 'styled-components';
import {Form, ErrorMessage} from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 170px;
    gap: 8px;
    padding: 20px;
    margin-left: 44%;
    border: 3px solid;
    border-radius: 8%;
`;

export const Label = styled.label`
    font-size: 21px;
    display: block;
    padding: 4px 0;
`;

export const FieldWrapper = styled.div`
    height: 70px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    color: red;
`;

export const ButtonSubmit = styled.button`
  margin-top: 8px;
  padding: 4px;
  background-color: aliceblue;
  border-radius: 4px;
  border: 1px solid lightgray;
  cursor: pointer;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;