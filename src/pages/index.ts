import { lazy } from 'react';

export const InicioPage = lazy(() => import('./inicio/Inicio.page'));
export const CoursePage = lazy(() => import('./:course/Course.page'));
