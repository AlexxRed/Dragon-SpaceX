import { refs } from '../../services/consts/refs';
import { ButtonCreate, Text } from './CreateButton.styled';

export const CreateButton = () => (
  <ButtonCreate to={refs.createNote}>
    <Text>Create new Note</Text>
  </ButtonCreate>
);
