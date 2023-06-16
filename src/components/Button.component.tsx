import { Button, ButtonProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react'

interface Props extends ButtonProps {
  children: ReactNode;
}
const ButtonComponent: FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      backgroundColor="#3e691350"
      color="#3e6913"
      cursor="pointer"
      border="1px solid #3e6913"
      textTransform="uppercase"
      rounded="full"
      fontSize="20px"
      _hover={{ opacity: 0.8 }}
      _active={{ opacity: 1 }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent;
