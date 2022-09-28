import styled from '@emotion/styled';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, SPACES } from '../../services/theme';





export const ButtonEdit = styled(Link)`
  cursor: pointer;
  margin-left: ${SPACES.m};
  border-radius: 3px;
  padding: 0px 7px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-weight: ${FONTS.WEIGHTS};
  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
  }
`;

export const ButtonIcon = styled(EditIcon)`
  cursor: pointer;
`;
