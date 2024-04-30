import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";


export const App = () => {
 const {theme} = useTheme();
  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <Navbar/>
              <div className="content-page">
                  <Sidebar />
                  <AppRouter/>
              </div>
          </Suspense>

      </div>
  )
}
