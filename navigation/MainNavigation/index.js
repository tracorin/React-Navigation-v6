import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PrivateRoute, PublicRoute} from '../components';
import {publicRoute, privateRoutes} from '../routes';
import { NotFound } from '../../components/pages';

const MainNavigation = () => {
    return(
        <Routes>
            <Route element={<PrivateRoute/>}>
                {
                    privateRoutes.map((route, index) => {
                        const {element, path} = route;

                        return (
                            <React.Fragment key={index}>
                                <Route element={element} path={path} />
                            </React.Fragment>
                        )
                    })
                }
            </Route>

            <Route element={<PublicRoute/>}>
                {
                    publicRoute.map((route, index) => {
                        const {element, path} = route;

                        return (
                          <React.Fragment key={index}>
                            <Route element={element} path={path} />
                          </React.Fragment>
                        );
                    })
                }
            </Route>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default MainNavigation;
