import { FC, FormEventHandler, ReactNode } from 'react';
import { Box, Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';

import { ImageComponent } from '@/components';
import logo from '@/resources/logo.png';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    padding="1rem"
    rounded="md"
    width="95%"
    maxWidth="380px"
  >
    {children}
  </Box>
)

interface FormProps extends Props {
  onSubmit: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement>;
}
export const Form: FC<FormProps> = ({ children, onSubmit }) => (
  <Box
    as="form"
    display="grid"
    width="100%"
    padding="1rem 0"
    onSubmit={onSubmit}
  >
    {children}
  </Box>
)

export const Logo: FC = () => (
  <ImageComponent
    src={logo}
    alt="Logotipo"
    width="90%"
    margin="auto"
  />
)

export const Title: FC<TextProps> = ({ children }) => (
  <Text
    textAlign="center"
    fontFamily="EB Garamond"
    fontSize="2.5rem"
    textTransform="uppercase"
    color="#3e6913"
    margin="0 0 2rem 0"
  >
    {children}
  </Text>
)
