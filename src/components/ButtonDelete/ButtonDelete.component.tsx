import { ButtonDelete, ButtonIcon } from './ButtonDelete.styled';

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <ButtonDelete type="button" onClick={onClick}>
    <ButtonIcon />
  </ButtonDelete>
);

export default DeleteButton;
