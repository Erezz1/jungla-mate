import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

const AdSpace: FC<FlexProps> = ({ children }) => (
  <Flex
    as="footer"
    position="absolute"
    bottom="0"
    width="100%"
    justifyContent="center"
    padding="2rem"
    backgroundColor="#3e6913"
    color="white"
    fontSize="2rem"
    fontWeight="bold"
  >
    {children}
  </Flex>
)

export default AdSpace;
