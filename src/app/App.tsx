import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets";



export const App = () => {
 const {theme, toggleTheme} = useTheme();
  return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <button onClick={toggleTheme}>TOGGLE</button>

          <AppRouter/>
      </div>
  )
}
