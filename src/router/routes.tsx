import { RouteObject, createBrowserRouter } from 'react-router-dom';
import {
  InicioPage,
  CoursePage
} from '@/pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <InicioPage />,
  },
  {
    path: '/:courseId',
    element: <CoursePage />,
  }
]

export const router = createBrowserRouter(routes);
