import { FC } from 'react';
import { Box, Flex, FlexProps, Image, Text, TextProps } from '@chakra-ui/react';

import hoja2 from '@/resources/hojas2.png';

export const Container: FC<FlexProps> = ({ children }) => (
  <>
    <Flex
      height="100%"
      width="90%"
      maxWidth="1300px"
      padding="3rem 0"
      position="relative"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {children}
    </Flex>
    <Image
      src={hoja2}
      alt="Imagen de hojas"
      width="100%"
      position="absolute"
      bottom="0"
    />
  </>
)

export const Title: FC<TextProps> = ({ children }) => (
  <Box
    backgroundColor="#3e6913"
    width="100%"
    position="absolute"
    top="0"
  >
    <Text
      as="h2"
      fontSize={["2xl", "3xl", "3xl", "4xl"]}
      textTransform="uppercase"
      color="white"
      padding="5px"
      textAlign={["center", "center", "center", "center", "left"]}
      margin={["0", "0", "0 15rem"]}
    >
      {children}
    </Text>
  </Box>
)
