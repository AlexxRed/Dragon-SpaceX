import styled from '@emotion/styled';
import { Field } from 'formik';
import { COLORS, SPACES } from '../../services/theme';

export const Box = styled.div`
  display: block;
`;

export const LableForm = styled.label`
  display: flex;
  flex-direction: column;
      @media (min-width: 320px) and (max-width: 780px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
  }
`;

export const InputForm = styled(Field)`
  display: flex;
  box-sizing: content-box;
  outline: none;
  padding: ${SPACES.m};
  flex-direction: column;
  margin-bottom: ${SPACES.m};
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
        @media (min-width: 320px) and (max-width: 780px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
  }
`;

export const Text = styled.p`
  display: block;
  width: 100%;
  text-decoration: none;
`;