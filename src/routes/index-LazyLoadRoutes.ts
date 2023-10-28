//? ESTE COMPONENTE NO ES PARTE DEL CURSO
//? PERO LO DEJO ACA COMO OTRO EJEMPLO
//? Este archivo se puede llamar index.ts y va con el archivo LazyLoadRoutes.tsx

import { useRoutes } from 'react-router-dom';
import { lazyLoadRoutes } from './LazyLoadRoutes';

export function RouterElement() {
    const routes = [
        {
            path: '/',
            name: 'Home',
            element: lazyLoadRoutes('Home'),
        },
        {
            path: 'about',
            name: 'About',
            element: lazyLoadRoutes('About'),
        },
        {
            path: 'services',
            name: 'Services',
            element: lazyLoadRoutes('Services'),
        },
    ];

    return useRoutes(routes);
}
