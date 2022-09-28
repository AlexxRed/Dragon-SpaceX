import styled from '@emotion/styled';
import { COLORS, FONTS, SPACES } from '../../services/theme';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TaskIcon from '@mui/icons-material/Task';

export const ItemHeader = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SPACES.m};
`;

export const ItemName = styled('p')`
  font-size: ${FONTS.SIZES.l};
`;

export const ItemCreated = styled.p`
  font-size: ${FONTS.SIZES.m};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemInfo = styled('div')`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${SPACES.m};
  @media (max-width: 2000px) {
    font-size: ${FONTS.SIZES.m};
  }
`;

export const ItemContainer = styled('li')`
  font-size: ${FONTS.SIZES.xl};
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.bold};
  color: ${COLORS.black};
  box-shadow: 5px 5px 5px ${COLORS.secondary};
  padding: ${SPACES.m};
  margin: ${SPACES.l};
  @media (max-width: 2000px) {
    font-size: ${FONTS.SIZES.l};
    margin: ${SPACES.s};
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

export const IdeaIcon = styled(EmojiObjectsIcon)`
  margin-right: 15px;
  height: 50px;
  fill: #ff0000;
`;

export const ThoughtIcon = styled(PsychologyIcon)`
  fill: #ff0000;
  margin-right: 15px;
  height: 100%;
`;

export const TasksIcon = styled(TaskIcon)`
  fill: #ff0000;
  margin-right: 15px;
  height: 100%;
`;