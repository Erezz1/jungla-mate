import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const DividerComponent: FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      as="span"
      width="2rem"
      height="3px"
      backgroundColor="#3e6913"
      rounded="full"
      margin="0 auto"
      {...props}
    />
  )
}

export default DividerComponent