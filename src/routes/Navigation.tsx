import { Suspense } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import logo from '../assets/react.svg';



//? El Suspense se encarga de mostrar un componente mientras
//? se hace el lazyload del componente final que se quiere mostrar. 

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="Reat logo" />

                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={ to } >
                                        <NavLink 
                                            to={ to } 
                                            className={ ({ isActive }) => isActive ? "nav-active " : '' }
                                        >
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                            }
                            {/* <li>
                                <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? "nav-active " : '' }>Lazy 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? "nav-active " : '' }>Lazy 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? "nav-active " : '' }>Lazy 3</NavLink>
                            </li> */}
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ to, path, Component }) => (
                                <Route 
                                    key={ to } 
                                    path={ path } 
                                    element={ <Component /> }
                                />
                            ))
                        }
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />

                        {/* <Route path="/lazy1" element={ <LazyPage1 /> } />
                        <Route path="/lazy2" element={ <LazyPage2 /> } />
                        <Route path="/lazy3" element={ <LazyPage3 /> } />

                        <Route path="/*" element={ <Navigate to="/lazy1" replace /> } /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
