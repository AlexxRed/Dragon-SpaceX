import { UnarchiveButton, ButtonIcon } from './ButtonUnarchive.styled';

const ButtonUnarchive = ({ onClick }: { onClick: () => void }) => (
  <UnarchiveButton type="button" onClick={onClick}>
    <ButtonIcon />
  </UnarchiveButton>
);

export default ButtonUnarchive;