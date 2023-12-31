import { FC, ReactNode, memo } from 'react';
import { Box, BoxProps, Img } from '@chakra-ui/react';

import jungla1 from '@/resources/s.webp';

interface Props extends BoxProps {
  children: ReactNode;
}
const WrapperComponent: FC<Props> = ({ children, ...props }) => (
  <Box
    width="100%"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="relative"
    {...props}
  >
    <Img
      src={jungla1}
      position="fixed"
      top="0"
      right="0"
      width={["150px", "200px", "250px"]}
      transform="scaleX(-1)"
      zIndex="1"
    />
    <Img
      src={jungla1}
      position="fixed"
      top="0"
      left="0"
      width={["150px", "200px", "250px"]}
      zIndex="1"
    />
    {children}
  </Box>
)


export default memo(WrapperComponent);
