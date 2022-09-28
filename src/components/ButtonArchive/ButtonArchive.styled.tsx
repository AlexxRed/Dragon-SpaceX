import styled from '@emotion/styled';
import ArchiveIcon from '@mui/icons-material/Archive';
import { COLORS, FONTS, SPACES } from '../../services/theme';

export const ArchiveButton = styled.button`
  cursor: pointer;
  margin-left: ${SPACES.m};
  border-radius: 3px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-weight: ${FONTS.WEIGHTS};
  border: 0px;
  &:hover,
  &:focus {
    background-color: ${COLORS.red};
  }
`;

export const ButtonIcon = styled(ArchiveIcon)`
  height: 100%;
`;