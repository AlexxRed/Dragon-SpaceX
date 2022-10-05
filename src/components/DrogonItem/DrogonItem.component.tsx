import { Box } from "./DrogonItem.styled";

const DragonItem = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box onClick={onClick}>
      <img src="" alt="" />
    </Box>
  );
};

export default DragonItem;
