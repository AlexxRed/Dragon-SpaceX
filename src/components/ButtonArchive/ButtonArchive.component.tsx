import { ArchiveButton, ButtonIcon } from './ButtonArchive.styled';

const ButtonArchive = ({ onClick }: { onClick: () => void }) => (
  <ArchiveButton type="button" onClick={onClick}>
    <ButtonIcon />
  </ArchiveButton>
);

export default ButtonArchive;