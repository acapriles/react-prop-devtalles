import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";



export const LazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout Page</h1>

            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Lazy 3</NavLink>
                </li>
            </ul>

            {/* 
                Todo lo que esté definido en estas rutas se va a cargar de forma perezosa (lazy load)
                al mismo tiempo cuando se llame a este módulo, ya que el mismo fue definido en los routes
                con la funcción "lazy()".
                Si comentamos las rutas entonces veremos que la carga del archivo pesa menos.
            */}
            <Routes>
                <Route path="lazy1" element={ <LazyPage1 /> } />
                <Route path="lazy2" element={ <LazyPage2 /> } />
                <Route path="lazy3" element={ <LazyPage3 /> } />

                {/* <Route path="/*" element={ <div>Not Found</div> } /> */}
                <Route path="*" element={ <Navigate to="lazy1" replace /> } />
            </Routes>
        </div>
    )
}


export default LazyLayout;