import  { ReactChild } from 'react';
import { Box } from './MainContainer.styled';

interface ContainerProps {
  children?: ReactChild | ReactChild[];
}

export const Container = ({ children }: ContainerProps) => <Box>{children}</Box>;
