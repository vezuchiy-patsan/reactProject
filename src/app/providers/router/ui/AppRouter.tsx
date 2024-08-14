import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routesConfig} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";
import {Loader} from "widgets/Loader";


const AppRouter = () => {
    const { t } = useTranslation();

    return (

            <Routes>
                {Object.values(routesConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={<Suspense fallback={<Loader />}>
                                    <div className="page-wrapper">{element}</div>
                                </Suspense>
                        }
                        path={path}
                    />
                ))}
            </Routes>

    );
};

export default AppRouter;

