import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS, FONTS } from '../../services/theme/';

export const ButtonCreate = styled(Link)`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  text-decoration: none;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  font-size: ${FONTS.SIZES.xl};
  width: 25%;
  
  box-shadow: 5px 5px 5px ${COLORS.secondary};
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s;
  }
  @media (max-width: 2000px) {
    font-size: ${FONTS.SIZES.l};
  }
  @media (max-width: 900px) {
    width: 75%;
  }
`;

export const Text = styled.p`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
