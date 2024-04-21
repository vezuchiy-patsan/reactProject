import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/className";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";



export const App = () => {
 const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>

    </div>
  )
}
