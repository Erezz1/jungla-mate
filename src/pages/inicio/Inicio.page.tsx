import { FC } from 'react';
import { Button, Flex, Img } from '@chakra-ui/react';

import { WrapperComponent } from '@/components';
import { Container, Title } from './Inicio.styled.page';

import logo from '@/resources/logo.png';

const InicioPage: FC = () => {

  return (
    <WrapperComponent>
      <Container>
        <Title>INSTITUTO PAULO FREIRE</Title>

        <Flex
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          flexDirection={["column", "column", "row"]}
          gap="2rem"
        >
          <Button
            padding="1.5rem 4rem"
            border="5px solid #3e6913"
            rounded="3xl"
            backgroundColor="white"
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="2xl"
            width="350px"
            boxShadow={`
              0.2rem 0.2rem white,
              0.6rem 0.6rem #3e6913
            `}
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 1 }}
          >
            Cursos disponibles
          </Button>
          <Button
            padding="1.5rem 4rem"
            border="5px solid #3e6913"
            rounded="3xl"
            backgroundColor="white"
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="2xl"
            width="350px"
            boxShadow={`
              0.2rem 0.2rem white,
              0.6rem 0.6rem #3e6913
            `}
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 1 }}
          >
            Avances
          </Button>
        </Flex>
      </Container>
      <Img
        src={logo}
        position="fixed"
        top="10"
        width={["150px", "200px", "350px"]}
        zIndex="1"
      />
    </WrapperComponent>
  )
}

export default InicioPage;
