import { FC } from 'react';
import { Img, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { WrapperComponent } from '@/components';
import { Title } from './Inicio.styled.page';

import logo from '@/resources/logo.png';

const InicioPage: FC = () => {

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
    <WrapperComponent>
      <Title>INSTITUTO PAULO FREIRE</Title>

      <Tabs variant="solid-rounded" colorScheme="green">
        <TabList backgroundColor="gray.100">
          {courses.map(course => (
            <Tab key={course.id}>{course.title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {courses.map(course => (
            <TabPanel key={course.id}>
              {course.courses.map(course => (
                <p key={course.id}>{course.name}</p>
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
