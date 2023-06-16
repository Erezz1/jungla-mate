import { FC } from 'react';
import { Flex, FlexProps, Image, Text, TextProps } from '@chakra-ui/react';

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
  <Text
    as="h2"
    fontSize={["2xl", "3xl", "5xl"]}
    fontWeight="hairline"
    marginBottom="3rem"
    textTransform="uppercase"
    color="gray.800"
    textShadow={`
      2px 0 #3e691370, -2px 0 #3e691370, 0 2px #3e691370, 0 -2px #3e691370,
      2px 2px #3e691370, -2px -2px #3e691370, 2px -2px #3e691370, -2px 2px #3e691370;
    `}
    letterSpacing="3px"
  >
    {children}
  </Text>
)
