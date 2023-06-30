import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

import { WrapperComponent } from '@/components';
import { Title } from './Inicio.styled.page';

import logo from '@/resources/logo.png';

const InicioPage: FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'c3',
      title: 'preescolar',
      courses: [
        {
          name: 'preescolar 1',
          id: 'k1'
        },
        {
          name: 'preescolar 2',
          id: 'k2'
        },
        {
          name: 'preescolar 3',
          id: 'k3'
        },
      ]
    },
    {
      id: 'c1',
      title: 'primaria',
      courses: [
        {
          name: 'primaria 1',
          id: 'p1'
        },
        {
          name: 'primaria 2',
          id: 'p2'
        },
        {
          name: 'primaria 3',
          id: 'p3'
        },
        {
          name: 'primaria 4',
          id: 'p4'
        },
        {
          name: 'primaria 5',
          id: 'p5'
        },
        {
          name: 'primaria 6',
          id: 'p6'
        },
      ]
    },
    {
      id: 'c2',
      title: 'secundaria',
      courses: [
        {
          name: 'secundaria 1',
          id: 's1'
        },
        {
          name: 'secundaria 2',
          id: 's2'
        },
        {
          name: 'secundaria 3',
          id: 's3'
        },
      ]
    },
  ]

  return (
    <WrapperComponent flexDirection="column">
      <Title>INSTITUTO PAULO FREIRE</Title>

      <Text
        fontSize="5xl"
        textTransform="uppercase"
        textAlign="center"
        marginBottom="2rem"
      >
        Avances
      </Text>

      <Tabs
        variant="solid-rounded"
        colorScheme="green"
        width="100%"
        maxWidth="1000px"
      >
        <TabList
          backgroundColor="green.200"
          rounded="3xl"
          width="100%"
          margin="0 auto"
          display="flex"
          justifyContent="space-between"
          gap="1rem"
        >
          {courses.map(course => (
            <Tab
              key={course.id}
              width="100%"
              textTransform="uppercase"
              fontWeight="light"
              fontSize="2xl"
              color="gray.100"
            >
              {course.title}
            </Tab>
          ))}
        </TabList>

        <TabPanels padding="5rem 0">
          {courses.map(course => (
            <TabPanel
              key={course.id}
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gap="2rem"
              padding="0"
            >
              {course.courses.map(course => (
                <Box
                  key={course.id}
                  width="100%"
                  textTransform="uppercase"
                  fontWeight="light"
                  fontSize="2xl"
                  color="gray.100"
                  backgroundColor="green.700"
                  textAlign="center"
                  rounded="3xl"
                  padding="5px 0"
                  cursor="pointer"
                  onClick={() => navigate(`/${course.id}`)}
                >
                  {course.name}
                </Box>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      <Img
        src={logo}
        position="fixed"
        bottom="5"
        width={["150px", "200px", "300px"]}
        zIndex="1"
      />
    </WrapperComponent>
  )
}

export default InicioPage;
