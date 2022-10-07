import styled from '@emotion/styled';
import { Form } from 'formik';
import { COLORS, FONTS, SPACES } from '../../services/theme';

export const Box = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${COLORS.grey};
  border-radius: ${SPACES.m};
  padding: ${SPACES.m};
  margin-left: auto;
  margin-right: auto;
      @media (min-width: 320px) and (max-width: 780px) {
    width: 310px;
  }
`;

export const FormTitle = styled.h1`
  font-weight: ${FONTS.WEIGHTS.bold};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: auto;
    @media (min-width: 320px) and (max-width: 780px) {
    width: 300px;
  }
`;

export const CreateTodo = styled(Form)`
  display: block;
  width: 320px;
  @media (min-width: 1201px) and (max-width: 2000px) {
    width: 450px;
  }
  @media (min-width: 320px) and (max-width: 780px) {
    width: 300px;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  text-align: center;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  font-size: ${FONTS.SIZES.l};
  margin: ${SPACES.m} 0;
  border: 0;
  border: 2px solid ${COLORS.secondary};
  box-shadow: 10px 10px 10px ${COLORS.black};
  border-radius: 5px;
  padding: ${SPACES.s};
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
  min-width: 280px;
    @media (min-width: 320px) and (max-width: 780px) {
    width: 200px;
  }
`;