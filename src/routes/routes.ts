import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

//? Así se como se carga un componente a través del Lazyload
const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        to: '/lazyload',
        //? Hay que iniciar con "/" y terminar con "*" para que tome todas
        //? las rutas hijas en el lazyload
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];