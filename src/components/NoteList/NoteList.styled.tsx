import styled from '@emotion/styled';
import { SPACES } from '../../services/theme';

export const StyledNoteList = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  margin: ${SPACES.m} auto 0;
  grid-template-columns: 1fr;
  grid-gap: ${SPACES.l};
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;
