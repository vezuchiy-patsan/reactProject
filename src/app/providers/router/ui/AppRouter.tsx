import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routesConfig} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";

const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
            <Routes>
                {Object.values(routesConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={(<div className="page-wrapper">{element}</div>)}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;

